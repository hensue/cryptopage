import TopicCard from "./ui/TopicCard"

export default function Topic() {
  return (
    <section className="relative bg-color">
      <div id="topic">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-12 md:pt-8">

            {/* <div className="flex items-center justify-center">
                Topic
            </div> */}
            <div className="max-w-3xl mx-auto text-center pt-12 pb-12 md:pb-12">
              <h2 className="h2">Discussion Topic</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* First Row */}
              <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 flex justify-center">

                <div className="bg-white rounded-lg p-4 space-around m-2 shadow-md transform transition duration-300 hover:-translate-y-3 hover:shadow-lg">
                  <div className='flex items-center justify-center'>
                    <div className="bg-green-100 w-16 h-16 flex rounded-full mr-2 shadow-md transform transition duration-300 hover:-translate-y-2 hover:shadow-lg">
                      <img className="w-16 h-16 object-cover rounded-full" src="/images/speakers/7)Nena-Dokuzov.png" alt="Card Image" />
                    </div>
                    <div className="bg-green-100 w-16 h-16 flex rounded-full shadow-md transform transition duration-300 hover:-translate-y-2 hover:shadow-lg">
                      <img className="w-16 h-16 object-cover rounded-full" src="/images/speakers/10)Jean-Charles-Gaudechon.png" alt="Card Image" />
                    </div>
                  </div>
                  <div className="mt-2 text-center">
                    <h3 className="text-lg font-semibold">Nena Dokuzov & Jean Charles Gaudechon</h3>
                    <p className="text-gray-500">THE ROLE OF STABLECOINS IN A DECENTRALIZED ECOSYSTEM</p>
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className=" col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 flex justify-center">
                <TopicCard
                  imageUrl="/images/speakers/1)Sunny-Lu.png"
                  name="Sunny Lu"
                  description="WHAT WEB 3.0 MEANS FOR ENTERPRISES"
                />
                <TopicCard
                  imageUrl="/images/speakers/4)Gracy-Chen.png"
                  name="Gracy Chen"
                  description="VALUE CREATION IN THE METAVERSE"
                />
                <TopicCard
                  imageUrl="/images/speakers/6)Max-Kordek.png"
                  name="Max Kordek"
                  description="DAOS: NEW BREED OF INTERNET-NATIVE ORGANIZATIONS"
                />
              </div>

              {/* Third Row */}
              <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 flex justify-center">
                <TopicCard
                  imageUrl="/images/speakers/2)Helen-Hai.png"
                  name="Helen Hai"
                  description="MAXIMIZING ESG IMPACT WITH BLOCKCHAIN"
                />
                <TopicCard
                  imageUrl="/images/speakers/12)Jason-Allegrante.png"
                  name="Jason Allegrante"
                  description="BRIDGING DEFI AND CEFI"
                />
                <TopicCard
                  imageUrl="/images/speakers/9)Dina-Saman.png"
                  name="Dina Sam'an"
                  description="INTEROPERABILITY - CHALLENGES AND OPPORTUNITIES"
                />
                <TopicCard
                  imageUrl="/images/speakers/1)Sunny-Lu.png"
                  name="Sunny Lu"
                  description="WEB 3 GAMING: THE NEW FRONTIER?"
                />
              </div>

              {/* Fourth Row */}
              <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 flex justify-center">
                <TopicCard
                  imageUrl="/images/speakers/1)Sunny-Lu.png"
                  name="Sunny Lu"
                  description="WEB 3: THE FUTURE IS HERE AND NOW"
                />
                <TopicCard
                  imageUrl="/images/speakers/5)Mohammed-Alblooshi.png"
                  name="Mohammed Alblooshi"
                  description="CENTRAL BANK DIGITAL CURRENCIES, AND CROSS-BORDER PAYMENTS"
                />
                <TopicCard
                  imageUrl="/images/speakers/8)Reece-Merrick.png"
                  name="Reece Merrick"
                  description="DECRYPTING THE REGULATORY LANDSCAPE OF VIRTUAL ASSETS"
                />
              </div>

              {/* Fifth Row */}
              <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 flex justify-center">

                <div className="bg-white rounded-lg p-4 space-around m-2 shadow-md transform transition duration-300 hover:-translate-y-3 hover:shadow-lg">
                  <div className='flex items-center justify-center'>
                    <div className="bg-green-100 w-16 h-16 flex rounded-full mr-2 shadow-md transform transition duration-300 hover:-translate-y-2 hover:shadow-lg">
                      <img className="w-16 h-16 object-cover rounded-full" src="/images/speakers/3)Alex-Zinder.png" alt="Card Image" />
                    </div>
                    <div className="bg-green-100 w-16 h-16 flex rounded-full shadow-md transform transition duration-300 hover:-translate-y-2 hover:shadow-lg">
                      <img className="w-16 h-16 object-cover rounded-full" src="/images/speakers/11)Nicole-Purin.png" alt="Card Image" />
                    </div>
                  </div>
                  <div className="mt-2 text-center">
                    <h3 className="text-lg font-semibold">Alex Zinder & Nicole Purin</h3>
                    <p className="text-gray-500">NFT MARKET OVERVIEW: TRENDS & OPPORTUNITIES</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}