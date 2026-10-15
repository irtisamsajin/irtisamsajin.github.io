import { HiOutlineExternalLink } from "react-icons/hi";

function Content(){
    const title="Open Source Contribution to Zulip";
    const date=""; //January 5, 2026

    return (
        <div className="sm:px-2">
            <h2 className="text-xl sm:text-2xl font-semibold ">{title}</h2>
            <p className="text-gray-500 text-sm sm:text-base my-2 sm:pl-2">{date}</p>

            <div className="text-base leading-7 sm:text-xl sm:leading-8 sm:pl-2 flex flex-col gap-2">
                <p>Zulip is an open-source software that allows teams to chat and collaborate. 
                While going through its main codebase (written in Django) and testing its features, I faced an issue where the forwarding of missed group messages to users' emails wasn't working. 
                It was causing an Attribute error. I raised an issue to the Zulip's github repository and assigned myself to work on it. 
                </p>

                <p>
                After finding out the source of the issue through debugging, I tried to understand what was causing the issue. 
                By looking at the official Django documentation, I realized the issue was caused likely due to a change in the Django version.
                </p>

                <p>I implemented the fix, tested manually and raised the PR which was eventually merged. 
                A detailed and technical description of the issue and the fix can be found in the links listed in the reference section.</p>

            </div>
            <div className="text-base sm:text-lg leading-6 sm:leading-8 mt-5 ml-2 sm:ml-4 text-gray-600">
                References:
                <ul className="list-disc pl-8 sm:pl-10">
                    <li><a href="https://github.com/zulip/zulip/issues/36177" className="flex items-center gap-2 inline-flex">Raised Issue <HiOutlineExternalLink /></a></li>
                    <li><a href="https://github.com/zulip/zulip/pull/36397" className="flex items-center gap-2 inline-flex">Merged PR <HiOutlineExternalLink /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Content