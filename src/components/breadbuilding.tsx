import { useEffect, useState } from "react";
import formatNumber from "../functions/formatNumber";

export type building = {
    name: string, // The name of the building
    price: number, // The starting price
    clicks_every: number, // Clicks every ? seconds
    gives: number, // Gives how many loafs per click
    price_up: number, // Percentage of price going up every time

    showCondition?: () => boolean, // A function that defines the condition to see this building
    quantity: number, // The initial quantity (0)
    last_clicked: number, // dw (1)
    icon?: string, // The icon when it clicks
};

const BreadBuilding = ({ buildData, setScore, clickicon }: { buildData: building, setScore: [number, React.Dispatch<React.SetStateAction<number>>], clickicon(count: string | number, icon?: string): void }) => {
    const [initialBuildQuantity, _] = useState(localStorage.getItem(`bread:buildings/${buildData.name}`) ? parseInt(localStorage.getItem(`bread:buildings/${buildData.name}`) as string) || 0 : buildData.quantity);

    const [buildQuantity, setBuildQuantity] = useState(initialBuildQuantity);
    const [buildPrice, setBuildPrice] = useState(Math.round(buildData.price * (initialBuildQuantity ? Math.pow(buildData.price_up, initialBuildQuantity) : 1)));
    const [buildLastClick, setBuildLastClick] = useState(buildData.last_clicked);
    const [localMax, setLocalMax] = useState(1);

    useEffect(() => {
        localStorage.setItem(`bread:buildings/${buildData.name}`, String(buildQuantity));
    }, [buildQuantity]);

    function gameloop() {
        if (buildQuantity == 0) return;

        if (buildLastClick <= 0) {
            clickicon(buildQuantity, buildData.icon);


            let minusBonus = 0;
            let speedModifier = parseInt(localStorage.getItem('bread:modifiers/speed') || '0');
            if (buildData.clicks_every > 1 && speedModifier) {
                minusBonus = speedModifier;
                if (buildData.clicks_every - minusBonus < 1) minusBonus = buildData.clicks_every - 1;
            }

            setBuildLastClick(buildData.clicks_every - minusBonus - 1);
            setLocalMax(buildData.clicks_every - minusBonus - 1);

            setScore[1](score => {
                let newscore = Math.round(score + buildQuantity * buildData.gives * parseFloat(localStorage.getItem('bread:modifiers/efficiency') || '1'))
                localStorage.setItem('bread:totalscore', String(parseInt(localStorage.getItem('bread:totalscore') || '0') + newscore - score));

                return newscore;
            });
        } else {
            setBuildLastClick(buildLastClick - 1)
        }

        (document.getElementById(`buildprogress-${buildData.name}`) as HTMLProgressElement).style.width = (localMax - buildLastClick) / localMax * 100 + '%';
    };

    useEffect(() => {
        const interval = setInterval(gameloop, 1000);
        return () => clearInterval(interval);
    }, [buildPrice, buildQuantity, buildLastClick]);

    function buy_building(ev: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        ev.stopPropagation();
        ev.preventDefault();

        if (Math.round(buildPrice * parseFloat(localStorage.getItem('bread:modifiers/price') || '1')) > setScore[0]) return;
        setScore[1](score => score - Math.round(buildPrice * parseFloat(localStorage.getItem('bread:modifiers/price') || '1')));

        setBuildQuantity(buildQuantity + 1);
        setBuildPrice(Math.round(buildData.price * Math.pow(buildData.price_up, buildQuantity + 1)));
    };

    return (
        <div className={'glass ' + ((Math.round(buildPrice * parseFloat(localStorage.getItem('bread:modifiers/price') || '1')) <= setScore[0]) ? 'coolclick greenish' : 'uncoolclick')} onClick={(ev) => buy_building(ev)} style={{ overflow: 'hidden' }}>
            <div>
                <img className="questicon" src={buildData.icon || '/bread/logo.png'} />
                <h2>{buildData.name} (x{buildQuantity})</h2>
            </div>
            <div>
                <img src={'/bread/logo.png'} style={{ height: '20px', width: '20px' }} />
                <a>{formatNumber(Math.round(buildQuantity * buildData.gives * parseFloat(localStorage.getItem('bread:modifiers/efficiency') || '1')))} - {formatNumber(Math.round(buildPrice * parseFloat(localStorage.getItem('bread:modifiers/price') || '1')))}</a>
            </div>
            <div className="glass progress" id={`buildprogress-${buildData.name}`} />
        </div>
    );
}

export default BreadBuilding;