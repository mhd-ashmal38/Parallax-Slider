import React from 'react'
import { Row } from 'react-bootstrap'
import Slider from './Slider';

function Content() {


    return (
        <div>

            <div className="text-div">
                <div className="text content pt-5 container-fluid">
                    <Row>
                        <h1 className='text-center fw-bold'>The Majestic Mountains</h1>
                        
                        <p className='pe-5 ps-5 p-3'>The mountains, like the ancient sentinels of a forgotten realm, stand tall and proud, their peaks scraping the soft belly of the cerulean sky. They rise like majestic titans, their silhouettes etched defiantly against the backdrop of the heavens. These mountains are an epitome of grandeur and resilience, a living testament to the earth’s might and its relentless endurance. Their formidable stature is a constant reminder of the planet’s ageless strength and timeless persistence.</p>

                        <p className='pe-5 ps-5'>Their rugged surfaces, etched with the countless stories of time, are a complex tapestry of shadows and light. These surfaces, worn by the ceaseless march of seasons, bear the imprints of centuries, their crinkles and folds narrating tales of eras gone by. This intricate mosaic of crevices and ridges, illuminated and concealed by the shifting sun, is a testament to the relentless passage of time and the enduring spirit of nature.</p>

                        {/* slider */}
                        <Slider />



                        <p className='pe-5 ps-5'>The sun, a celestial artist, paints the mountains with a precision that is nothing short of poetic. As it embarks on its daily journey across the expansive horizon, it bathes the mountains in a kaleidoscope of colors, from the soft pastels of dawn to the fiery hues of dusk. The play of light and shadow over the mountains’ rugged terrain creates a dynamic landscape that changes with every passing hour, offering an ever-evolving spectacle of natural beauty.</p>

                        <p className='pe-5 ps-5'>The craggy faces of these mountainous giants, speckled with the vibrant greens of hardy vegetation and the pristine white of winter snow, hold a raw, natural beauty that is both awe-inspiring and humbling. The contrast between the harsh, unyielding rock and the delicate, fleeting snowflakes or the resilient, tenacious greenery serves as a stark reminder of nature’s paradoxical character — its capacity for both ruthlessness and gentleness. This juxtaposition, this symphony of extremes, contributes to the mountains’ mesmerizing allure, making them a sight that is as humbling as it is breathtaking.</p>
                    </Row>
                </div>
            </div>

        </div>
    )
}

export default Content