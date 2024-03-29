import { JSX } from "preact";
import { StateUpdater, useContext } from "preact/hooks";
import InputRange from "../components/InputRange.tsx";
import KeyInput from "../components/KeyInput.tsx";
import ModelSelect from "../components/ModelSelect.tsx";
import Title from "../components/Title.tsx";
import siderStatusCtx from "../hooks/ctx/siderStatusCtx.ts";

/**
 * Sider侧边栏
 *
 * @return {*}  {JSX.Element}
 * 
 * @example
   <Sider />
 */
const Sider: () => JSX.Element = (): JSX.Element => {
    const siderCtx: {
        siderStatus: boolean;
        setSiderStatus: StateUpdater<boolean>;
    } = useContext(siderStatusCtx);

    let className = "w-0";

    if (siderCtx.siderStatus) {
        className = "w-auto";
    }

    return (
        <div class={`bg-sider transition-all flex-col ${className}`}>
            <Title class="m-2" mainTitle="设置" />

            <KeyInput />
            <InputRange />
            <ModelSelect />
        </div>
    );
};

export default Sider;
