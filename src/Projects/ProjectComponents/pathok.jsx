
function Content(){
    const title="PATHOK: A Bangla Handwritten and Scene Text Recognition Model using Grapheme Tokenization";
    const date="June 2026"; //January 5, 2026

    return (
        <div className="sm:px-2">
            <h2 className="text-xl sm:text-2xl font-semibold ">{title}</h2>
            <p className="text-gray-500 text-sm sm:text-base my-2 sm:pl-2">{date}</p>

            <div className="text-base leading-7 sm:text-xl sm:leading-8 sm:pl-2">
                <p>While significant progress has been made in OCR for widely used languages, Bangla
                OCR remains challenging due to the complex structure of the Bangla script, which includes
                consonants, vowels, modifiers, compound characters, and grapheme clusters. In addition,
                variations in handwriting styles and the presence of scene text captured under diverse real world conditions further increase the difficulty of accurate text recognition. 
                This project aims to develop a robust OCR framework capable of recognizing both Bangla handwritten
                text and Bangla scene text while investigating the effectiveness of different image encoders
                and tokenization strategies.
                </p>
                <div className="flex flex-wrap justify-center m-9 gap-3">
                    <figure className="text-base text-center text-gray-600">
                        <img 
                            src="/figures/pathok/hand_written_texts.png"
                            alt=""
                            className="w-60 my-3 bg-white"
                        />
                        Fig 1(a): Bangla Handwritten texts
                    </figure>
                    <figure className="text-base text-center text-gray-600">
                        <img 
                            src="/figures/pathok/Scene_texts.png"
                            alt=""
                            className="w-80 my-3 rounded-sm border border-neutral-200 bg-white"
                        />
                        Fig 1(b): Bangla Scene texts
                    </figure>
                </div>
                <p>
                
                The pipeline starts with the image
                of the Bangla text, either handwritten or scene text, which is then preprocessed as required. The preprocessed image is then
                fed as input to an image encoder. We have compared two different types of encoders - ResNet18 and TrOCR (A Transformer-based pre-trained model for OCR) . The encoder extracts features from the text image and
                feeds them to the decoder. A transformer decoder is used which takes those encoder features
                and detects the tokens. The tokenizer then decodes the graphemes corresponding to those tokens
                and concatenates those graphemes to output the bangla text.
                </p>

                <figure className="m-9 text-base text-center text-gray-600">
                    <img 
                        src="/figures/pathok/results.png"
                        alt=""
                        className="w-180 my-3 mx-auto bg-white"
                    />
                    Table 1: Performance comparison of different Encoder models and Tokenizers
                </figure>
                
                <p>
                The findings demonstrate that grapheme-aware modeling and Transformer-based encoders provide substantial advantages for Bangla OCR. 
                The framework contributes toward the development of effective OCR systems for low-resource languages and
                supports the broader goals of document digitization and language preservation. 
                </p>
            </div>
        </div>
    )
}

export default Content