import { HiOutlineExternalLink } from "react-icons/hi";

function Content(){
    const title="STM32 Bare Metal Programming";
    const date=""; //January 5, 2026

    return (
        <div className="sm:px-2">
            <h2 className="text-xl sm:text-2xl font-semibold ">{title}</h2>
            <p className="text-gray-500 text-sm sm:text-base my-2 sm:pl-2">{date}</p>

            <div className="text-base leading-7 sm:text-lg sm:leading-8 sm:pl-2  flex flex-col gap-2">
                <p>
                    The goal of this project is to understand how firmware is compiled, linked, flashed and debugged on an STM32 microcontroller, while exploring various on-chip peripherals including GPIO, Timers, Interrupts, ADC/DAC and communication protocols.
                </p>
                <p>
                    This project uses the STM32F446RE Nucleo board, which features an integrated ST-LINK debugger, that allows firmware to be flashed and debugged directly without requiring an external debugging probe.
                </p>

                
            </div>
            <div className="text-base sm:text-lg leading-6 sm:leading-8 mt-5 ml-2 sm:ml-4 text-gray-600">
                References:
                <ul className="list-disc pl-8 sm:pl-10">
                    <li><a href="https://github.com/irtisamsajin/STM32-Bare-Metal-Programming"> Githup repository {<HiOutlineExternalLink className="inline-block align-top mt-1.25 sm:mt-2" />}</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Content