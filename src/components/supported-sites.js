const React = require("react");

function SupportRequest(props) {
    return (<div id="support-request" hidden="hidden">
        You can request support for this website <a
        href="https://docs.google.com/forms/d/1RVrtZfl22pGhGgvm8SFxmdTRG7yQ-er75s60-CpUK_8">here</a>
    </div>);
}

class SupportedSites extends React.Component {

    render() {
        return (
            <div id="supported-sites" hidden="hidden">
                <div>
                    <div id="app-name">Modelpress Image Downloader</div>
                </div>
                <SupportRequest />
                <div>
                    <div id="supported-sites-title">Supported Websites:</div>
                </div>
            </div>
        );
    }
}

export default SupportedSites;
