import Virtual from "./VirtualBlock/VirtualBlock";
import Service from "./Service/Service";

const Main = () => {
    return <>
        <Virtual/>
        <div style={{ marginTop: '192px' }}>
            <Service/>
        </div>

    </>
}

export default Main;