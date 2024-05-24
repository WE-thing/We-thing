/**
 * Tailwind CSS IntelliSense 확장 프로그램 깔면
 * 속성이 자동완성 되어 더 편하게 사용할 수 있습니다
 */

function StyleTest() {
  const name = "name";
  return (
    <>
      <div>
        {/* 그냥 black과 theme1의 black의 색상이 다릅니다. text-theme1-black을 꼭 적용해주세요 */}
        <div className="text-hero text-theme1-black font-continuous">
          Invitation
        </div>
        <div className="text-heading1 text-theme1-black font-nanum font-bold">
          나눔명조
        </div>
        <div className="text-heading2 text-theme1-black font-nanum">
          나눔명조
        </div>
        <div className="text-heading1 text-theme1-primary font-nanum font-bold">
          안녕
        </div>
        <div className="text-heading1 text-theme1-pink font-nanum font-bold">
          안녕
        </div>
      </div>
    </>
  );
}

export default StyleTest;
