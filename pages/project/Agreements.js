import Layout from '../../components/Layout'

const agreePageContent = 
    <div classname="ProjectStartAgreements__ContentsBody-sc-1vrd6a2-1 hMCHfF" data-reactid="41">
        <h2 classname="ProjectStartAgreements__Header-sc-1vrd6a2-2 gAoVXO" data-reactid="42"># 프로젝트를 올리기 전에 확인해 주세요.</h2>
        <div classname="ProjectStartAgreements__Guidance-sc-1vrd6a2-3 ipkmcm" data-reactid="43">
            텀블벅은 공개 검토 절차를 통해 창작자님이 작성한 프로젝트가 텀블벅의 정책을 준수하는지 확인하고 있습니다. <br data-reactid="45"/>
            아래 사항들을 확인한 후 프로젝트를 올려 주세요.
            <ul data-reactid="47">
                <li data-reactid="48"><a href="https://help.tumblbug.com/hc/ko/articles/115006302047" target="_blank" rel="noopener noreferrer" data-reactid="49">공개 검토 절차 및 기준</a></li>
                <li data-reactid="50"><a href="https://help.tumblbug.com/hc/ko/articles/115007487228" target="_blank" rel="noopener noreferrer" data-reactid="51">창작자 자격 요건</a></li>
            </ul>
        </div>
        <main autocomplete="on" data-reactid="52">
        <ul data-reactid="53">
            <li data-reactid="54">
            <div classname="_13KHfN73YmQgsYHxXvuh_J _3bQlo02zZkYjUBehiAWUDX ProjectStartAgreements__ServiceAgreementCheckbox-sc-1vrd6a2-4 iQcbCy" data-reactid="55">
                <input type="checkbox" id="2871e" required="" data-reactid="56"/><label for="2871e" data-reactid="57">새로운 아이디어를 실현하기 위한 프로젝트입니다.</label>
            </div>
            </li>
            <li data-reactid="58">
            <div classname="_13KHfN73YmQgsYHxXvuh_J _3bQlo02zZkYjUBehiAWUDX ProjectStartAgreements__ServiceAgreementCheckbox-sc-1vrd6a2-4 iQcbCy" data-reactid="59">
                <input type="checkbox" id="ceec9" required="" data-reactid="60"/><label for="ceec9" data-reactid="61">이미 시판된 제품, 현금이나 지분 등 수익 제공, 선물 없는 단순 기부, 성인 인증이 필요한 콘텐츠 등 기준에 맞지 않는 선물을 제공하지 않습니다.</label>
            </div>
            </li>
            <li data-reactid="62">
            <div classname="_13KHfN73YmQgsYHxXvuh_J _3bQlo02zZkYjUBehiAWUDX ProjectStartAgreements__ServiceAgreementCheckbox-sc-1vrd6a2-4 iQcbCy" data-reactid="63">
                <input type="checkbox" id="5f0fa" required="" data-reactid="64"/><label for="5f0fa" data-reactid="65">창작자의 신분증 혹은 사업자등록증, 국내 은행 계좌, 연락 가능한 본인 휴대폰 번호가 있습니다.</label>
            </div>
            </li>
            <li data-reactid="66">
            <div classname="_13KHfN73YmQgsYHxXvuh_J _3bQlo02zZkYjUBehiAWUDX ProjectStartAgreements__ServiceAgreementCheckbox-sc-1vrd6a2-4 iQcbCy" data-reactid="67">
                <input type="checkbox" id="679fd" required="" data-reactid="68"/><label for="679fd" data-reactid="69">창작자 대표자는 19세 이상 성인입니다. (미성년자 참여 방법은 자격 요건을 참고해 주세요)</label>
            </div>
            </li>
        </ul>
        <link>
        <button classname="sc-1x93b2b-0-Button-kDSBcD eBHMAv" type="submit" data-reactid="70">계속하기</button>
        </link>
        </main>
    </div>

const Agreements = () => (
    <Layout children={agreePageContent} title='Agreements'></Layout>
    
);

export default Agreements;