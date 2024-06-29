import { useState } from "react";

const Dashboard = () => {
  const [item, setItem] = useState("https://picsum.photos/id/237/500/300");
  return (
    <div>
      <div className="bg-gray-100">
        <div className="min-h-screen flex flex-col md:flex-row">
          {/* Sidebar */}

          {/* Main content */}
          <div className={`flex-1 p-6 `}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Dashboard</h2>
              <button className="px-4 py-2 bg-blue-600 text-white text-base font-medium rounded-lg hover:bg-blue-500">
                New Report
              </button>
            </div>
            {/* Content cards */}
            <div className={`grid gap-6 `}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-2"></h3>
                <img src={item} alt="" />
              </div>
              <div className="flex gap-6">
                <div
                  className="bg-white p-6 rounded-lg shadow-lg"
                  onClick={() =>
                    setItem("https://picsum.photos/id/237/500/300")
                  }
                >
                  <h3 className="text-lg font-bold mb-2">Card Title 1</h3>
                  <img src="https://picsum.photos/id/237/500/300" alt="" />
                </div>
                <div
                  className="bg-white p-6 rounded-lg shadow-lg"
                  onClick={() =>
                    setItem("https://picsum.photos/id/538/500/300")
                  }
                >
                  <h3 className="text-lg font-bold mb-2">Card Title 2</h3>
                  <img src="https://picsum.photos/id/538/500/300" alt="" />
                </div>
                <div
                  className="bg-white p-6 rounded-lg shadow-lg"
                  onClick={() =>
                    setItem("https://picsum.photos/id/539/500/300")
                  }
                >
                  <h3 className="text-lg font-bold mb-2">Card Title 3</h3>
                  <img src="https://picsum.photos/id/539/500/300" alt="" />
                </div>
                <div
                  className="bg-white p-6 rounded-lg shadow-lg"
                  onClick={() =>
                    setItem("https://picsum.photos/id/140/500/300")
                  }
                >
                  <h3 className="text-lg font-bold mb-2">Card Title 4</h3>
                  <img src="https://picsum.photos/id/140/500/300" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
