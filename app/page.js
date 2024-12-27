// 寫註解可使用快捷鍵: ctrl + / (cmd + /)
import Link from "next/link"
import TripCard from '@/components/TripCard';
import tripList from '@/data/trip-list';
import faqList from "@/data/faq-list"

export default function Home() {
  // 陣列.map()透過map迴圈函式能夠將陣列內的資料逐一取出做加工
  const cards = tripList.map((trip) => {
    //console.log("一個旅程", trip);
    return <TripCard trip={trip} key={trip.id} />
  })

  return (
    <>

      <header className="bg-neutral-100 py-10 text-center">
        <div className="container mx-auto">
          <h1 className="important-title">HTML &amp; CSS</h1>
          <p>關於HTML標籤的更多資訊可參考 <a href="https://www.w3schools.com/html/" target="_blank">W3Schools HTML</a></p>

          <Link href="/about" className='my-4  inline-block'>關於本站</Link>
          <Link href="/faq" className='my-4 ml-4  inline-block'>常見問答</Link>
        </div>
      </header>
      <section id="tripListSection" className="my-4">
        <div className="container mx-auto px-10 sm:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* 請在此處放入一系列的產品卡片 */}
          {cards}


        </div>
      </section >
      <section id="htmlTagsSection" className="my-4">
        <div className="container mx-auto">
          <h1>HTML標籤</h1>
          <p>用以表達你想在網頁上放入的各種內容</p>
          {/*請嘗試在此處放入HTML標籤 */}
          <h1>標題字</h1>
          {/* 標題字h1-h6> */}
          <h1>heading1</h1>
          <h2>heading2</h2>
          <h3>heading3</h3>
          <h4>heading4</h4>
          <h5>heading5</h5>
          <h6>heading6</h6>
          <p>pargraph</p>

          <a href="https://www.google.com" target='_blank'>Google</a>

          <img src="/images/image1.jpg" alt="海岸" />
          <img src="/images/image2.jpg" alt="林中小徑" />

        </div>
      </section>
      <footer className="">
        <div className="container mx-auto">
          <p>
            CopyRight &copy; 2024
          </p>
        </div>
      </footer>
    </>
  );
}
