import Countdown from "./countdown/Countdown"
export default function Newsletter() {
  return (
    <section>
      <div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* <div className="md:pb-20"> */}

            <div className="flex items-center justify-center mt-8">
              <Countdown />
            </div>

          </div>
        </div>
      {/* </div> */}
    </section>
  )
}