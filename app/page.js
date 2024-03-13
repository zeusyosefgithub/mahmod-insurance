'use client';

export default function Home() {
  return (
    <div>
      <div className="flex justify-center mt-32">
        <div className="w-9/12">
          <div className="flex justify-center ">
            <div className="text-xl bg-primary-200 p-5 pl-14 pr-14 rounded-full tracking-widest font-black">
              דף הבית
            </div>
          </div>
          <div className="mt-20 flex justify-between">
            <div className="w-1/2">
              1
            </div>
            <div className="m-10"></div>
            <div className="w-1/2">
              <div className="w-full bg-gray-300 p-5 rounded-lg overflow-auto h-72 shadow-xl">
                <div className="mb-3 text-2xl text-primary border-b-2 border-primary tracking-widest font-black text-right">התראות</div>
                <table className="bg-gray-200 w-full">
                  <tbody>
                    <tr className="bg-gray-300 sticky top-0 z-10 border-r-4 border-r-gray-300">
                      <th className="w-24 p-1">רכב</th>
                      <th className="w-24 p-1">יצרן</th>
                      <th className="w-24 p-1">סוג</th>
                      <th className="w-24 p-1">לקוח</th>
                      <th className="w-24 p-1">נהג</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
