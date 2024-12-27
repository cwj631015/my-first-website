import Link from "next/link"
import faqList from "@/data/faq-list"

export default function Faq() {
    return (
        <>
            <header className="py-10 bg-neutral-100 text-center">
                <h1 className="text-2xl font-blod mb-4">常見問答</h1>
                <p>以下是我們整理的常見問</p>
                <Link href="/" className="my-4 inline-block">返回首頁</Link>

            </header>

            <section className="bg-neutral-200 py-10">
                <div className="container mx-auto">
                    {

                        faqList.map((faq) => {
                            const { id, question, answer } = faq;
                            return (
                                <div key={id} className="bg-white mb-4 rounded-md shadow-md">
                                    <h2 className="p-4">{question}</h2>
                                    <h3 className="p-4 border-t border-neutral-300 text-neutral-400">{answer}</h3>
                                </div>

                            )


                        })
                    }

                </div>

            </section>

        </>
    )
}