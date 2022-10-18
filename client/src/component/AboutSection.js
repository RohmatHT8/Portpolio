import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
export default function AboutSection() {
    return (
        <section id="about" className="pt-36 pb-32">
            <div className="container md:mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full px-4 mb-10 md:w-1/2">
                        <h4 className="font-bold uppercase text-lg text-primary mb-3">About Me</h4>
                        <p className="font-medium text-base text-secondary max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. At ultrices mi tempus imperdiet nulla malesuad</p>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                        <h3 className="font-semibold text-dark text-2xl mb-4">Let's Connect</h3>
                        <p className="font-medium text-base text-secondary mb-6 max-w-xl">lobortis elementum nibh tellus molestie nunc non blandit massa. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Cursus turpis massa tincidunt dui ut ornare lectus sit amet.</p>
                        <div className='flex'>
                            <a href={""} target={"_blank"} className='icons'><AiFillLinkedin /></a>
                            <a href={""} target={"_blank"} className='icons'><FaDiscord /></a>
                            <a href={""} target={"_blank"} className='icons'><AiFillInstagram /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}