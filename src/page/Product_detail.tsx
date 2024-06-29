import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../config/axios";
import { IProduct } from "./../interface/products";
import { right } from "../assets/img";
import { ProductContext } from "../Context/ProductContext";
const Product_detail = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(ProductContext);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get(`/products/${id}`);
        dispatch({ type: "GET_PRODUCT", payload: data });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  const product = state.product;
  return (
    <div>
      {" "}
      <div className="max-w-7xl m-auto my-10">
        <section className=" py-[24px]">
          <div className="container">
            <h1 className="text-4xl font-medium">Chi tiết sản phẩm</h1>
            <div className="flex gap-16">
              <div>
                <div className="relative w-[573px] h-[520px] flex items-center justify-center bg-[#fffdfd] bg-cover bg-center bg-no-repeat rounded-3xl border border-[#F4F4F4]">
                  {product && product.thumbnail && (
                    <img
                      src={product.thumbnail}
                      className="w-[400px] h-[400px]"
                    />
                  )}
                  <button className="absolute w-12 h-12 right-4 bottom-4 rounded-full bg-white px-3 shadow-lg">
                    <img src={right} className="w-5 h-5" />
                  </button>
                </div>
                <div className="*:h-16 *:w-16 flex space-x-5 justify-center py-6">
                  {product &&
                    product.images.map((image: string) => (
                      <div className="flex items-center justify-center bg-[url('./assets/images/bgProduct.png')] bg-cover bg-center bg-no-repeat hover:border hover:border-primary rounded-lg">
                        <img src={image} className="w-12 cursor-pointer" />
                      </div>
                    ))}
                </div>
              </div>
              <div>
                <div>
                  <span className="text-sm/[150%] tracking-[4px] text-[#9D9EA2] py-2">
                    CONCENTRATES
                  </span>
                  <h1 className="text-[32px]/[150%] -tracking-[1.5px] font-semibold text-[#060709] pt-2 pb-1">
                    {product?.title}
                  </h1>
                  <div className="pb-3">
                    <button className="bg-[#F2F6F4] text-[#05422C] px-4 py-2 rounded-lg text-xs mr-3 hover:bg-[#F3FBF4] hover:border-primary border">
                      Indica
                    </button>
                    <button className="bg-[#F2F6F4] text-[#05422C] px-4 py-2 rounded-lg text-xs hover:bg-[#F3FBF4] hover:border-primary border">
                      Sativa 100%
                    </button>
                  </div>
                  <div className="py-1 flex justify-between items-center mb-4">
                    <div>
                      <del className="text-[#9D9EA2] mr-2">$200.00</del>
                      <span className="text-[20px] text-[#EB2606] font-medium">
                        ${product?.price}.00
                      </span>
                    </div>
                    <div className="text-[#C8C9CB]">
                      <img
                        src="./assets/images/star.svg"
                        className="inline-flex"
                      />
                      <span className="text-[#060709] mr-3">4.6/5</span>|
                      <span className="text-[#060709] ml-2">135 </span>
                      <span>Reviews</span>
                    </div>
                  </div>
                  <div className="px-6 border border-[#F4F4F4] rounded-lg *:py-2">
                    <div className="flex items-center gap-4">
                      <div>
                        <img src="./assets/images/colorfilter.png" />
                      </div>
                      <div>
                        <span className="text-xs/[150%] tracking-[1px] text-[#717378]">
                          EFFECTS
                        </span>
                        <p className="text-[#060709] text-sm/150%">
                          Calming, Creative, Happy, Relaxing, Sleepy, Uplifting
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div>
                        <img src="./assets/images/colorfilter.png" />
                      </div>
                      <div>
                        <span className="text-xs/[150%] tracking-[1px] text-[#717378]">
                          AROMAS
                        </span>
                        <p className="text-[#060709] text-sm/150%">
                          Chemical, Citrus, Earthy, Pungent, Sour
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div>
                        <img src="./assets/images/colorfilter.png" />
                      </div>
                      <div>
                        <span className="text-xs/[150%] tracking-[1px] text-[#717378]">
                          AROMAS
                        </span>
                        <p className="text-[#060709] text-sm/150%">
                          Chemical, Citrus, Earthy, Pungent, Sour
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="py-5">
                    <div className="border-b border-[#F4F4F4]">
                      <span className="text-xs/[150%] tracking-[1px] text-[#717378] py-4">
                        AROMAS
                      </span>
                      <p className="text-[#46494F] text-sm/150% py-2">
                        {product?.description}
                      </p>
                    </div>
                  </div>
                  <div className="pb-7">
                    <div className="flex justify-between py-3">
                      <div>
                        <span className="text-xs/[150%] tracking-[1px] text-[#717378] py-5">
                          WEIGHT
                        </span>
                        <div className="py-2">
                          <button className="bg-[#F2F6F4] text-[#05422C] px-4 py-3 rounded-lg text-xs hover:bg-[#F3FBF4] hover:border-primary border">
                            28g
                          </button>
                          <button className="bg-[#F2F6F4] text-[#05422C] px-4 py-3 rounded-lg text-xs hover:bg-[#F3FBF4] hover:border-primary border">
                            1/2lb
                          </button>
                          <button className="bg-[#F2F6F4] text-[#05422C] px-4 py-3 rounded-lg text-xs hover:bg-[#F3FBF4] hover:border-primary border">
                            1/4lb
                          </button>
                        </div>
                      </div>
                      <div>
                        <span className="text-xs/[150%] tracking-[1px] text-[#717378] py-4">
                          ADD INTEGRA PACK
                        </span>
                        <div className="flex gap-4 items-center">
                          <div className="py-5 flex items-center">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-primary"
                            />
                            <span className="px-3">4g (+$2.00)</span>
                          </div>
                          <div className="py-5 flex items-center">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5"
                            />
                            <span className="px-3">8g (+$3.00)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className="rounded-full px-3.5 py-3 bg-[#FEF8E8] text-sm/[150%]">
                        Purchase this product now and earn
                        <span className="text-[#EB2606]">80</span> Points!
                      </span>
                    </div>
                  </div>
                  <div className="border border-[#F4F4F4] my-5 px-6 rounded-3xl">
                    <div className="flex justify-between gap-4 py-3 border-b border-[#F4F4F4]">
                      <div className="grid *:py-2">
                        <p className="text-sm/[150%]">
                          Khalifa Kush (AAAA)
                          <span className="text-[#9D9EA2]">2x</span>
                        </p>
                        <p className="text-sm/[150%]">
                          Add Integra Pack - <span>4g</span>
                        </p>
                      </div>
                      <div className="grid *:py-2 justify-end items-end">
                        <span className="text-sm/[150%]">$120.00</span>
                        <span className="text-sm/[150%] pl-4">$2.00</span>
                      </div>
                    </div>
                    <div className="py-4 flex justify-between">
                      <div className="border border-[#F4F4F4] py-3 px-6 rounded-lg text-slate-400 w-[237px]">
                        <button className="px-2 text-black">-</button>
                        <input
                          type="number"
                          placeholder="2"
                          className="w-9 h-9 px-2 bg-slate-200 no-spin focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="px-2 mr-6 text-black">+</button> |
                        <a className="text-xs text-[#17AF26] px-1">In Stock</a>
                      </div>
                      <div>
                        <button className="bg-[#17AF26] px-9 py-4 text-white rounded-full">
                          Add to Cart |<span className="px-3">$242.00</span>
                        </button>
                      </div>
                    </div>
                    <div className="*:py-1 py-4">
                      <div>
                        <img
                          src="./assets/images/tick-circle.png"
                          className="inline-flex"
                        />
                        <span>Free Xpress Shipping on orders over $149</span>
                      </div>
                      <div>
                        <img
                          src="./assets/images/tick-circle.png"
                          className="inline-flex"
                        />
                        <span>Order before 12:00pm for same day dispatch</span>
                      </div>
                      <div>
                        <img
                          src="./assets/images/tick-circle.png"
                          className="inline-flex"
                        />
                        <span>Support &amp; ordering open 7 day a week</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between py-10 border-t border-[#F4F4F4]">
                    <div className="flex items-center">
                      <span className="text-[#717378] text-xs/[150%] tracking-[1px] pr-20">
                        SKU
                      </span>
                      :<p className="px-2">N/A</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-[#717378] text-xs/[150%] tracking-[1px] pr-5">
                        Categories
                      </span>
                      :<p className="text-primary px-2">AAAA Weed, Indica</p>
                    </div>
                  </div>
                  <div className="border-t border-[#C8C9CB] py-5">
                    <div className="text-center py-5">
                      <button className="bg-[#F2F6F4] text-[#05422C] px-10 py-3 rounded-full hover:bg-[#F3FBF4] hover:border-[#05422C] border">
                        Description
                      </button>
                      <button className="bg-[#F2F6F4] text-[#05422C] px-10 py-3 rounded-full hover:bg-[#F3FBF4] hover:border-[#05422C] border mx-4">
                        Reviews <span className="text-[#9D9EA2]">(350)</span>
                      </button>
                      <button className="bg-[#F2F6F4] text-[#05422C] px-10 py-3 rounded-full hover:bg-[#F3FBF4] hover:border-[#05422C] border">
                        Refer a Friend
                      </button>
                    </div>
                    <div className="py-5 *:text-sm">
                      <p>
                        Jungle Diamonds is a slightly indica dominant hybrid
                        strain (60% indica/40% sativa) created through crossing
                        the infamous Slurricane X Gorilla Glue #4 strains. Named
                        for its gorgeous appearance and breeder, Jungle Diamonds
                        is a favorite of indica and hybrid lovers alike thanks
                        to its delicious taste and tingly, arousing high. Jungle
                        Diamonds buds have sparkling oversized spade-shaped
                        olive green nugs with vivid amber hairs and a thick
                        frosty blanket of glittering tiny blue-tinted white
                        crystal trichomes. As you pull apart each sticky little
                        nugget, aromas of spicy mocha coffee and fruity herbs
                        are released.
                      </p>
                      <br />
                      <p>
                        The flavor is of sweet chocolate with hints of fresh
                        ripe berries to it, too. The Jungle Diamonds high is
                        just as delicious, with happy effects that will boost
                        the spirits and kick negative thoughts and moods to the
                        curb. You’ll feel a tingly sense in your body from start
                        to finish that serves to remove any aches or pains while
                        leaving you pretty aroused at times. This is accompanied
                        by a blissfully unfocused heady lift that leaves your
                        head in the clouds without causing sedation. With these
                        effects and its pretty high 17-24% THC level, Jungle
                        Diamonds is ideal for experienced patients with chronic
                        pain, cramps or muscle spasms and appetite loss or
                        nausea.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <hr />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product_detail;
