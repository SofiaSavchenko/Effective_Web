import Virtual from "./Virtual/Virtual";
import Service from "./Service/Service";
import Provider from "./Provider/Provider";
import Download from "./Download/Download";

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

    </>
}

export default Main;
