import { HiOutlineExternalLink } from "react-icons/hi";

function Content(){
    const title="Multitask learning for segmentation and classification of breast tumors from ultrasound images";
    const date=""; //January 5, 2026

    return (
        <div className="sm:px-2">
            <h2 className="text-xl sm:text-2xl font-semibold ">{title}</h2>
            <p className="text-gray-500 text-sm sm:text-base my-2 sm:pl-2">{date}</p>

            <div className="text-base leading-7 sm:text-lg sm:leading-8 sm:pl-2">
                
                <figure className="m-9 text-base text-center text-gray-600">
                    <img 
                        src="/figures/multitask_seg_class/UNET.png"
                        alt=""
                        className="w-120 mx-auto my-3"
                    />
                    Fig 1: Model Architecture
                </figure>
                <h4 className="text-xl font-semibold mt-5">Features</h4>
                <ul className="list-disc pl-5 sm:pl-8 my-2">
                    <li>A unified tumor segmentation and classification deep learning model for ultrasound
                    breast tumor images.</li>
                    <li>The backbone consists of a U-Net Architecture modified to handle both the tasks. </li>
                    <li>For segmentation task, a mask is generated that locates the tumor in the ultrasound image.</li>
                    <li>The classifier uses the bottleneck layers of the U-Net architecture to classify the image as Normal, Benign or Malignant.</li>
                </ul>
                <h4 className="text-xl font-semibold mt-5">Results</h4>
                <div className="flex flex-col m-9 gap-3 items-center">
                    <figure className="text-base text-center text-gray-600">
                        <img 
                            src="/figures/multitask_seg_class/Tumor.png"
                            alt=""
                            className="w-full my-3 bg-white"
                        />
                        Fig 2(a): Predicted mask for a case with Tumor.
                    </figure>
                    <figure className="text-base text-center text-gray-600">
                        <img 
                            src="/figures/multitask_seg_class/Normal.png"
                            alt=""
                            className="w-full my-3 "
                        />
                        Fig 2(b): Case with no tumor.
                    </figure>
                </div>
                <p>We measured classification accuracies and used Dice and IOU scores to compare the segmentation performance for different versions of our architecture.
               
                </p>               
                <figure className="m-9 text-base text-center text-gray-600">
                    <img 
                        src="/figures/multitask_seg_class/Performance.png"
                        alt=""
                        className="w-150 mx-auto my-3"
                    />
                    Fig 3: Performance Analysis
                </figure>
            </div>
            <div className="text-base sm:text-lg leading-6 sm:leading-8 mt-5 ml-2 sm:ml-4 text-gray-600">
                Resources:
                <ul className="list-disc pl-8 my-1">
                    <li><a href="https://github.com/irtisamsajin/EEE402_Project" className="flex items-center gap-2 inline-flex"> For more details on the architecture <HiOutlineExternalLink /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Content