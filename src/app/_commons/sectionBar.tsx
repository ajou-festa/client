"use client";

import { DONGBAK_SECTION_LIST } from "@/app/lib/constants";
import { useRouter } from "next/navigation";
import { useQueryWithDefault } from "@/app/hooks/useQueryWithDefault";
import EntireMap from "@/public/entire-map.svg";
import SectionList from "@/public/section-list.svg";
import useIsOpenStore from "../hooks/useIsOpenStore";
import useIsFirstStore from "../hooks/useIsFirstStore";

const SectionBar = ({
  selectedDay,
  selectedSection,
}: {
  selectedDay: number;
  selectedSection: string;
}) => {
  const { getQueryUrl } = useQueryWithDefault();
  const { isSectionBarOpen, setIsSectionBarOpen, setIsNavOpen, setIsDayOpen } =
    useIsOpenStore();
  const { setCameFromSection } = useIsFirstStore();
  const router = useRouter();

  const sections = Object.keys(DONGBAK_SECTION_LIST);
  const maxIndex = sections.length - 1;
  const selectedIndex = sections.findIndex(
    (section) => section === selectedSection,
  );

  const handleClickLeft = () => {
    const prevIndex = selectedIndex === 0 ? maxIndex : selectedIndex - 1;
    router.push(getQueryUrl(selectedDay, sections[prevIndex]));
  };

  const handleClickRight = () => {
    const nextIndex = selectedIndex === maxIndex ? 0 : selectedIndex + 1;
    router.push(getQueryUrl(selectedDay, sections[nextIndex]));
  };

  const handleClickSection = (sectionKey: string) => {
    router.push(getQueryUrl(selectedDay, sectionKey));
    setIsSectionBarOpen(!isSectionBarOpen);
  };

  return (
    <>
      <div className="z-30 absolute bottom-0 w-full">
        <div
          className={`absolute bottom-[5rem] z-10 w-full rounded-t-2xl overflow-y-hidden bg-brown-100  ${
            isSectionBarOpen ? "h-[15rem]" : "h-0"
          } transition-all duration-300 ease-in-out`}
        >
          <ul>
            {sections.map((sectionKey, index) => (
              <li key={index}>
                <div
                  className={`flex justify-center items-center w-full py-[1.5rem] hover:bg-brown-200 hover:font-semibold ${
                    sectionKey === selectedSection ? "hidden" : "block"
                  }`}
                  onClick={() => handleClickSection(sectionKey)}
                >
                  <span className="text-2xl text-brown-500 text-center font-semibold">
                    {
                      DONGBAK_SECTION_LIST[sectionKey as "A" | "B" | "C" | "D"]
                        .name
                    }
                  </span>
                </div>
                <div className={`w-full border-gray-50 border-[0.1px]`}></div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full h-[5rem] flex flex-row justify-between items-center bg-transparentWhite-200 pl-[2.4rem] py-4 pr-[2.6rem] border-t-2 border-brown-500 backdrop-blur-sm">
          <button
            onClick={() => {
              setCameFromSection(true);
              router.push("/entire-map");
            }}
          >
            <EntireMap />
          </button>
          <button onClick={() => handleClickLeft()}>
            <div className="w-12 h-10 flex items-center justify-center">
              <div className="w-5 h-5 rotate-45 border-b-2 border-l-2 border-brown-500">
                &nbsp;
              </div>
            </div>
          </button>
          <span className="w-[13.8rem] font-semibold text-3xl text-center text-brown-500">
            {
              DONGBAK_SECTION_LIST[selectedSection as "A" | "B" | "C" | "D"]
                .name
            }
          </span>
          <button onClick={() => handleClickRight()}>
            <div className="w-12 h-10 flex items-center justify-center">
              <div className="w-5 h-5 rotate-45 border-t-2 border-r-2 border-brown-500">
                &nbsp;
              </div>
            </div>
          </button>
          <button
            onClick={() => {
              setIsSectionBarOpen(!isSectionBarOpen);
              setIsNavOpen(false);
              setIsDayOpen(false);
            }}
          >
            <div className="w-12 h-10 flex items-center justify-center">
              <SectionList />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default SectionBar;
