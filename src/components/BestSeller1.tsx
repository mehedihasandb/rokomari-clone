"use client";

export default function Home() {
  return (
    <div className="container mx-auto">
    
    <header className="flex items-center justify-between mt-5 pt-5 bg-yellow-100 px-4">
  <img src="https://www.rokomari.com/static/200/images/leaderboard/leader_board_logo.png" alt="Rokomari Logo" className="h-[80px] w-[220px] ml-5" />
  <p className="ml-4 text-justify ml-[50px]">
    আসসালামু আলাইকুম। ৫ম বারের মত আয়োজিত রকমারি বইমেলা বেস্টসেলার অ্যাওয়ার্ড লিডারবোর্ডের চূড়ান্ত ফলাফল প্রকাশ করা হল। 
    ক্যান্সেল রিটার্ন সহ সকল তথ্য উপাত্ত বিশ্লেষণের মাধ্যমে ফলাফল নির্ধারিত হয়েছে। সকল বিজয়ী লেখক এবং প্রকাশকদের রকমারি 
    ডট কম এর পক্ষ থেকে আন্তরিক অভিনন্দন ও শুভেচ্ছা। খুব শীঘ্রই বিজয়ীদের হাতে রকমারি বেস্টসেলার অ্যাওয়ার্ড ২০২৪ তুলে 
    দেয়া হবে। সে পর্যন্ত পাশে থাকার অনুরোধ। নিরন্তর ভালোবাসা...
  </p>
</header>

      <main className="flex justify-center space-x-4 bg-yellow-100  p-4">
        <section className="w-1/3 bg-bestc p-4 rounded shadow-md">
          <h2 className="text-xl text-center font-bold">ফিকশন বই</h2>
          <button className="w-full mt-2 mb-4 p-2 border border-white rounded-full text-white bg-bestc">বই</button>
          <select className="w-full mt-2 mb-4 p-2 border border-white rounded-full text-white bg-bestc">
              <option className="bg-white text-black">All in Non-Fiction Books</option>
              <option className="bg-white text-black">উপন্যাস</option>
              <option className="bg-white text-black">গল্প, কবিতা ও ছড়া</option>
              <option className="bg-white text-black">সায়েন্স ফিকশন</option>
              <option className="bg-white text-black">রহস্য, গোয়েন্দা, ভৌতিক, থ্রিলার ও অ্যাডভেঞ্চার</option>
              <option className="bg-white text-black">কমিক, রম্য ও শিশুকিশোর</option>
             
            </select>
          <div className="space-y-2">
            <div className="bg-white p-2 rounded-xl shadow">
              <h4>1.</h4>
              <h3>পতঙ্গ</h3>
              <p>Author: <strong>হরলান কোবেন</strong></p>
            </div>
            <div className="bg-white p-2 rounded shadow">
              <h3>অভ্যন্তরের মৃত্যু</h3>
              <p>Author: <strong>সানিয়া মাহবুব</strong></p>
            </div>
          </div>
          <button className="mt-4 p-2 text-white rounded flex items-center justify-center ">
  সব দেখুন
  <img src="https://www.rokomari.com/static/200/images/arrow-right.png" alt="Arrow Right" className="ml-2 h-4 w-4" />
</button>
        </section>
        <section className="w-1/3 bg-bestc1 p-4 rounded shadow-md">
          <h2 className="text-xl text-center font-bold">নন ফিকশন বই</h2>
          <button className="w-full mt-2 mb-4 p-2 border border-white rounded-full text-white bg-bestc1">বই</button>
          <select className="w-full mt-2 mb-4 p-2 border border-white rounded-full text-white bg-bestc1">
          <option>All in Non-Fiction Books</option>
          <option className="bg-white text-black">All in Non-Fiction Books</option>
              <option className="bg-white text-black">উপন্যাস</option>
              <option className="bg-white text-black">গল্প, কবিতা ও ছড়া</option>
              <option className="bg-white text-black">সায়েন্স ফিকশন</option>
              <option className="bg-white text-black">রহস্য, গোয়েন্দা, ভৌতিক, থ্রিলার ও অ্যাডভেঞ্চার</option>
              <option className="bg-white text-black">কমিক, রম্য ও শিশুকিশোর</option>
            </select>
          <div className="space-y-2">
            <div className="bg-white p-2 rounded shadow">
              <h3>সাইতাম গ্রেনেড</h3>
              <p>Author: <strong>...</strong></p>
            </div>
            <div className="bg-white p-2 rounded shadow">
              <h3>স্মার্ট মোশানিক</h3>
              <p>Author: <strong>...</strong></p>
            </div>
          </div>
          <button className="mt-4 p-2 text-white rounded flex items-center justify-center ">
  সব দেখুন
  <img src="https://www.rokomari.com/static/200/images/arrow-right.png" alt="Arrow Right" className="ml-2 h-4 w-4" />
</button>
        </section>
        <section className="w-1/3 bg-bestc2 p-4 rounded shadow-md">
          <h2 className="text-xl text-center font-bold">ধর্মীয় বই</h2>
          <button className="w-full mt-2 mb-4 p-2 border border-white rounded-full text-white bg-bestc2">বই</button>
          <select className="w-full mt-2 mb-4 p-2 border border-white rounded-full text-white bg-bestc2">
            <option>All in Religious Books</option>
            <option className="bg-white text-black">উপন্যাস</option>
              <option className="bg-white text-black">গল্প, কবিতা ও ছড়া</option>
              <option className="bg-white text-black">সায়েন্স ফিকশন</option>
              <option className="bg-white text-black">রহস্য, গোয়েন্দা, ভৌতিক, থ্রিলার ও অ্যাডভেঞ্চার</option>
              <option className="bg-white text-black">কমিক, রম্য ও শিশুকিশোর</option>
          </select>
          <div className="space-y-2">
            <div className="bg-white p-2 rounded shadow">
              <h3>আত্মার পুনরুত্থান</h3>
              <p>Author: <strong>...</strong></p>
            </div>
            <div className="bg-white p-2 rounded shadow">
              <h3>চোখের জলে...</h3>
              <p>Author: <strong>...</strong></p>
            </div>
          </div>
          <button className="mt-4 p-2 text-white rounded flex items-center justify-center ">
  সব দেখুন
  <img src="https://www.rokomari.com/static/200/images/arrow-right.png" alt="Arrow Right" className="ml-2 h-4 w-4" />
</button>
        </section>
      </main>
     
    </div>
  );
}
