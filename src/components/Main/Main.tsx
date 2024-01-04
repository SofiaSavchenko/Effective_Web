import Virtual from "./Virtual/Virtual";
import Service from "./Service/Service";
import Provider from "./Provider/Provider";
import Download from "./Download/Download";
import Customer from "./Customer/Customer";
import Articles from "./Articles/Articles";

const Main = () => {
    return <>
        <Virtual/>
        <div style={{ marginTop: '192px' }}>
            <Service/>
        </div>
        <div style={{ marginTop: '221px' }}>
            <Provider/>
        </div>
        <div style={{ marginTop: '229px' }}>
            <Download/>
        </div>
        <div style={{ marginTop: '266px' }}>
            <Customer/>
        </div>
        <div style={{ marginTop: '222px', marginBottom: '130px' }}>
            <Articles/>
        </div>

    </>
}

export default Main;
