import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';

const Landkit = () => {
    return (
    <div className="main-div">
        <iframe style={{height:"700px", width:"400px", border : "none"}} title="relay-widget"
        src='https://development-branch.relaychain.com/#/cross-chain-bridge-transfer?widget'></iframe>
    <Part1 />
    <Part2 />
    <Part3 />
    </div> 
    
    )
}

export default Landkit;