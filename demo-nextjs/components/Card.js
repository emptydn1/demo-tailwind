import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ id, author, download_url, text, href }) => {
    return (
        <div className="w-1/3 mt-5">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <Link href={`/${href}/${id}`}>
                    <a>
                        <Image
                            width={400}
                            height={400}
                            src={download_url}
                            alt="Mountain"
                        />
                    </a>
                </Link>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{author}</div>
                    <p className="text-gray-700 text-base">
                        {text
                            ? text
                            : "Bacon ipsum dolor amet shank capicola tenderloin jowl doner short loin ham, turducken pork bresaola cupim burgdoggen alcatra prosciutto.  Tenderloin pork chop drumstick leberkas sausage.  Ball tip pork belly pig short ribs bresaola ham hock flank sausage chislic bacon spare ribs turkey shoulder pork loin.  Chuck jowl pork loin prosciutto salami spare ribs bresaola, pork tenderloin turkey biltong rump cow brisket."}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #photography
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #travel
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #winter
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;
