import { useEffect, useState } from "react";
import formatNumber from "../functions/formatNumber";

export type quest = {
    name: string, // The name of the quest
    description?: string, // A description of the quest
    lockname: string, // The name of the quest when locked
    price: number, // The price to unlock it
    clickvalue: number, // Will be added to the current click value

    newspeed?: number, // Removes ? seconds from every cooldown more than 2 seconds long
    newefficiency?: number, // Multiplies by ? the production per building
    newprice?: number, // Multiplies by ? the building cost

    unlock: () => boolean, // The unlock condition
    icon?: string, // The icon when showed (will be a lock icon when locked)

    rebirths?: number,
};


const questList: quest[] = [
    {
        name: '1 - Welcome to Breadland!',
        description: '1st Quest! Click here',
        lockname: '1 - Own 5 Auto Clickers',
        clickvalue: 1,
        price: 50,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Auto Clicker") as string) >= 5;
        },
        icon: '/bread/cursor.svg',
    },
    {
        name: '2 - Bread Chef!',
        description: 'So here are the quests...',
        lockname: '2 - Own 3 Chefs',
        clickvalue: 1,
        price: 200,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Chef") as string) >= 3;
        },
        icon: '/bread/cookie.svg',
    },
    {
        name: '3 - Cheater?!',
        description: 'Every time you unlock one...',
        lockname: '3 - Own 10 Auto Clickers',
        clickvalue: 1,
        price: 350,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Auto Clicker") as string) >= 10;
        },
        icon: '/bread/cursor.svg',
    },
    {
        name: '4 - Bakerindustry',
        description: 'Your click value will increase.',
        lockname: '4 - Own 5 Bread Bakeries',
        clickvalue: 1,
        price: 750,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Bread Bakery") as string) >= 5;
        },
        icon: '/bread/flask.svg',
    },
    {
        name: '5 - Chef Army',
        description: 'And every 5 quests: BONUS',
        lockname: '5 - Own 15 Chefs',
        clickvalue: 1,
        price: 1500,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Chef") as string) >= 15;
        },
        icon: '/bread/cursor.svg',
    },
    {
        name: 'BONUS - Faster Ovens!',
        description: 'Produces 1 second faster',
        lockname: 'Faster... Faster Bread-',
        clickvalue: 5,
        newspeed: 1,
        price: 2000,
        unlock() { return true },
        icon: '/bread/stopwatch.svg',
    },
    {
        name: '6 - Bakery Business',
        description: 'I guess it\'s time for me to go',
        lockname: '6 - Own 10 Bread Bakeries',
        clickvalue: 8,
        price: 2500,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Bread Bakery") as string) >= 10;
        },
        icon: '/bread/flask.svg',
    },
    {
        name: '7 - Bread Clicker',
        description: 'And leave you click here',
        lockname: '7 - Own 20 Auto Clickers',
        clickvalue: 8,
        price: 3000,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Auto Clicker") as string) >= 20;
        },
        icon: '/bread/cursor.svg',
    },
    {
        name: '8 - Bread Banker',
        description: 'Don\'t click too much please',
        lockname: '8 - Own 5 Bread Banks',
        clickvalue: 8,
        price: 4000,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Bread Bank") as string) >= 5;
        },
        icon: '/bread/bank.svg',
    },
    {
        name: '9 - Factoring Bread',
        description: 'I mean don\'t go too far',
        lockname: '9 - Own 5 Bread Factories',
        clickvalue: 8,
        price: 5000,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Bread Factory") as string) >= 5;
        },
        icon: '/bread/factory.svg',
    },
    {
        name: '10 - Pro Baker',
        description: 'Cya later my dude',
        lockname: '10 - Own 15 Bread Bakeries',
        clickvalue: 8,
        price: 6000,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Bread Bakery") as string) >= 15;
        },
        icon: '/bread/flask.svg',
    },
    {
        name: 'BONUS - Bigger Ovens!',
        description: '20% more value on sell',
        lockname: 'Expensive Bread!',
        clickvalue: 25,
        newefficiency: 1 + 20 / 100,
        price: 6500,
        unlock() { return true },
        icon: '/bread/building-add.svg',
    },
    {
        name: '11 - ALL 10!',
        description: 'Oh you just got another bonus!',
        lockname: '11 - Own 10 of Everything',
        clickvalue: 32,
        price: 7500,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Bread Factory") as string) >= 10;
        },
        icon: '/bread/badge-10.svg',
    },
    {
        name: '12 - Loafly Paradise',
        description: 'That\'s cool. I\'m going for real now.',
        lockname: '12 - Own 10 Bread Paradises',
        clickvalue: 32,
        price: 8500,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Bread Paradise") as string) >= 10;
        },
        icon: '/bread/airplane.svg',
    },
    {
        name: '13 - Why so much bread?',
        description: 'HINT: clicking more gives more',
        lockname: '13 - Reach 100K Loafs',
        clickvalue: 32,
        price: 10000,
        unlock() {
            return parseInt(localStorage.getItem("bread:score") as string) >= 100000;
        },
        icon: '/bread/coin.svg',
    },
    {
        name: '14 - Loafly Paradise',
        description: 'I hope this helps :)',
        lockname: '14 - Own 15 Bread Banks and Factories',
        clickvalue: 32,
        price: 12500,
        unlock() {
            return (parseInt(localStorage.getItem("bread:buildings/Bread Bank") as string) >= 15) && (parseInt(localStorage.getItem("bread:buildings/Bread Factory") as string) >= 15);
        },
        icon: '/bread/bank.svg',
    },
    {
        name: '15 - Thats a lot of Clicks',
        description: 'HINT: become rich by making more money',
        lockname: '15 - Own 35 Auto Clickers',
        clickvalue: 32,
        price: 15000,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Auto Clicker") as string) >= 35;
        },
        icon: '/bread/cursor.svg',
    },
    {
        name: 'BONUS - Cheaper Flour!',
        description: 'Reduce buidling cost by 5%',
        lockname: 'Wait you shouldnt see this text!',
        clickvalue: 50,
        newprice: 1 - 5 / 100,
        price: 50000,
        unlock() { return true },
        icon: '/bread/building-add.svg',
    },
    {
        name: '16 - 15 them all!!',
        description: 'Wow another upgrade!',
        lockname: '16 - Own 15 of Everything',
        clickvalue: 64,
        price: 55000,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Bread Paradise") as string) >= 15;
        },
        icon: '/bread/badge-15.svg',
    },
    {
        name: '17 - Im Baking Chef!',
        description: 'I\'m coming back in 2 quests.',
        lockname: '17 - Own 20 Chefs and Bread Bakeries',
        clickvalue: 64,
        price: 60000,
        unlock() {
            return (parseInt(localStorage.getItem("bread:buildings/Chef") as string) >= 20) && (parseInt(localStorage.getItem("bread:buildings/Bread Bakery") as string) >= 20);
        },
        icon: '/bread/cookie.svg',
    },
    {
        name: '18 - Bank Milestone',
        lockname: '18 - Own 20 Bread Banks',
        clickvalue: 64,
        price: 75000,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Bread Bank") as string) >= 20;
        },
        icon: '/bread/bank.svg',
    },
    {
        name: '19 - Factories Department',
        lockname: '19 - Own 20 Bread Factories',
        clickvalue: 64,
        price: 85000,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Bread Factory") as string) >= 20;
        },
        icon: '/bread/factory.svg',
    },
    {
        name: '20 - 20 20 20 20',
        description: 'OK I\'m back! Wow holy moly',
        lockname: '20 - Own 20 of Everything',
        clickvalue: 64,
        price: 100000,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Bread Paradise") as string) >= 20;
        },
        icon: '/bread/badge-20.svg',
    },
    {
        name: 'BONUS - Even Faster Ovens!',
        description: 'Produces 2 seconds faster',
        lockname: 'Infinity Bread!',
        clickvalue: 50,
        newspeed: 2,
        price: 125000,
        unlock() { return true },
        icon: '/bread/stopwatch.svg',
    },
    {
        name: '21 - What a Milky Loaf Way!',
        description: 'you clicked so much already',
        lockname: '21 - Own 5 Loafly Way',
        clickvalue: 128,
        price: 110000,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Loafly Way") as string) >= 5;
        },
        icon: '/bread/stars.svg',
    },
    {
        name: '22 - 25 + 25 is 50!',
        description: 'Don\'t you wanna stop?',
        lockname: '22 - Own 25 Chefs and Bread Bakeries',
        clickvalue: 128,
        price: 125000,
        unlock() {
            return (parseInt(localStorage.getItem("bread:buildings/Chef") as string) >= 25) && (parseInt(localStorage.getItem("bread:buildings/Bread Bakery") as string) >= 25);
        },
        icon: '/bread/cookie.svg',
    },
    {
        name: '23 - What a Milky Loaf Way!',
        description: 'Just don\'t reach 25!',
        lockname: '23 - Own 10 Loafly Way',
        clickvalue: 128,
        price: 150000,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Loafly Way") as string) >= 10;
        },
        icon: '/bread/stars.svg',
    },
    {
        name: '24 - Maxed Factory',
        description: 'Uh oh I told you to stop please',
        lockname: '24 - Own 25 Bread Banks and Factories',
        clickvalue: 128,
        price: 175000,
        unlock() {
            return (parseInt(localStorage.getItem("bread:buildings/Bread Bank") as string) >= 25) && (parseInt(localStorage.getItem("bread:buildings/Bread Factory") as string) >= 25);
        },
        icon: '/bread/stars.svg',
    },
    {
        name: '25 - [THE END?]',
        description: 'Muahaha you will never reach that one',
        lockname: '25 - Reach 7.5M Loafs',
        clickvalue: 128,
        price: 200000,
        unlock() {
            return parseInt(localStorage.getItem("bread:score") as string) >= 7_500_000;
        },
        icon: '/bread/coin.svg',
    },
    {
        name: 'BONUS - Huge Burning Ovens!',
        description: 'NO- U- My game- YOU BEAT IT! NOOOO-',
        lockname: 'Expensive Bread Again!',
        clickvalue: 200,
        newefficiency: 1 + 50 / 100,
        price: 250000,
        unlock() { return true },
        icon: '/bread/building-add.svg',

        rebirths: 1,
    },
    // 30th quest
    {
        name: '26 - Bread War III',
        description: 'im back lil man!',
        lockname: '26 - Own 10 Universal Bakeries',
        clickvalue: 256,
        price: 210000,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Universal Bakery") as string) >= 10;
        },
        icon: '/bread/globe.svg',
    },
    {
        name: '27 - Clickily',
        description: 'u cant beat my game! muahaha',
        lockname: '27 - Own 40 Auto Clickers',
        clickvalue: 256,
        price: 220000,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Auto Clicker") as string) >= 40;
        },
        icon: '/bread/cursor.svg',
    },
    {
        name: '28 - Lemme Bake',
        description: 'anyway, how was ur day?',
        lockname: '28 - Own 35 Chefs',
        clickvalue: 256,
        price: 250000,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Chef") as string) >= 35;
        },
        icon: '/bread/cookie.svg',
    },
    {
        name: '29 - Lemme Bake Again',
        description: 'nice rebirth u got there',
        lockname: '29 - Own 35 Bread Bakeries',
        clickvalue: 256,
        price: 275000,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Bread Bakery") as string) >= 35;
        },
        icon: '/bread/flask.svg',
    },
    {
        name: '30 - Lemme Bake Again',
        description: 'thats one more in ur counter',
        lockname: '30 - Own 30 Bread Banks',
        clickvalue: 256,
        price: 300000,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Bread Bank") as string) >= 30;
        },
        icon: '/bread/bank.svg',
    },
    {
        name: 'BONUS - Even Cheaper Flour!',
        description: 'Reduce buidling cost by 15%',
        lockname: 'How do you see this text?',
        clickvalue: 450,
        newprice: 1 - 15 / 100,
        price: 350000,
        unlock() { return true },
        icon: '/bread/building-add.svg',
    },
    {
        name: '31 - AUTOCLICKKKKEEEEE-',
        description: 'have u checked the leaderboard btw?',
        lockname: '31 - Own 50 Auto Clickers',
        clickvalue: 512,
        price: 325000,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Auto Clicker") as string) >= 50;
        },
        icon: '/bread/cursor.svg',
    },
    {
        name: '32 - Multiverse Bakery?',
        description: 'hmhmmm',
        lockname: '32 - Own 15 Universal Bakeries',
        clickvalue: 512,
        price: 400000,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Universal Bakery") as string) >= 15;
        },
        icon: '/bread/globe.svg',
    },
    {
        name: '33 - Your Bakery Is Crazy?',
        description: 'moooyyaaaaiii',
        lockname: '33 - Own 40 Chefs and Bread Bakeries',
        clickvalue: 512,
        price: 500000,
        unlock() {
            return (parseInt(localStorage.getItem("bread:buildings/Chef") as string) >= 40) && (parseInt(localStorage.getItem("bread:buildings/Bread Bakery") as string) >= 40);
        },
        icon: '/bread/cookie.svg',
    },
    {
        name: '34 - Galaxy-wide Bakery Industry',
        description: 'bet u cant reach the end',
        lockname: '34 - Own 20 Universal Bakeries',
        clickvalue: 512,
        price: 550000,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Universal Bakery") as string) >= 20;
        },
        icon: '/bread/globe.svg',
    },
    {
        name: '35 - Hard Quest Sorry',
        description: 'u might actually reach it lol',
        lockname: '35 - Own 25 of Every Building',
        clickvalue: 512,
        price: 600000,
        unlock() {
            return parseInt(localStorage.getItem("bread:buildings/Universal Bakery") as string) >= 25;
        },
        icon: '/bread/badge-25.svg',
    },
    {
        name: 'BONUS - 20% off',
        description: 'argh- u are going too far!',
        lockname: 'HoW Do u SeE ThIs TExT???',
        clickvalue: 200,
        newprice: 1 - 20 / 100,
        price: 600000,
        unlock() { return true },
        icon: '/bread/building-add.svg',

        rebirths: 2,
    },
    // 42th quest
];


const BreadQuest = ({ setScore, setClickValue }: { setScore: [number, React.Dispatch<React.SetStateAction<number>>], setClickValue: React.Dispatch<React.SetStateAction<number>> }) => {
    const [questIndex, setQuestIndex] = useState(localStorage.getItem('bread:questIndex') ? parseInt(localStorage.getItem('bread:questIndex') as string) || 0 : 0);

    useEffect(() => {
        if (questIndex != -1) localStorage.setItem('bread:questIndexBackup', String(questIndex));
        localStorage.setItem('bread:questIndex', String(questIndex));
    }, [questIndex]);

    let isUnlocked = questList[questIndex] && questList[questIndex].unlock();
    function click_quest(ev: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (localStorage.getItem('bread:canrebirth') === 'true') return;
        ev.stopPropagation();
        ev.preventDefault();

        if (!isUnlocked || questList[questIndex].price > setScore[0]) return;
        let current = questList[questIndex];

        if (current.newefficiency) localStorage.setItem('bread:modifiers/efficiency', String(current.newefficiency));
        if (current.newspeed) localStorage.setItem('bread:modifiers/speed', String(current.newspeed));
        if (current.newprice) localStorage.setItem('bread:modifiers/price', String(current.newprice));

        setClickValue(val => val + current.clickvalue)
        setScore[1](score => score - current.price);
        setQuestIndex(i => ((current.rebirths || -1) > parseInt(localStorage.getItem('bread:rebirth') || '0')) ? -1 : i + 1);
        if (current.rebirths && current.rebirths > parseInt(localStorage.getItem('bread:rebirth') || '0')) localStorage.setItem('bread:canrebirth', 'true');
    };

    return (
        <div className={'quest glass ' + ((isUnlocked && setScore[0] >= (questList[questIndex].price || 0)) ? 'coolclick greenish' : 'uncoolclick')} onClick={(ev) => click_quest(ev)}>
            <div>
                <img className="questicon" src={isUnlocked ? (questList[questIndex]?.icon || '/bread/logo.png') : '/bread/lock.svg'} />
                <h2>{(isUnlocked ? questList[questIndex]?.name : questList[questIndex]?.lockname) || 'Rebirth For More Quests!'}</h2>
            </div>
            <a>{questList[questIndex]?.price ? formatNumber(questList[questIndex].price) : '∞'}{(questList[questIndex]?.description) ? ` - ${questList[questIndex]?.description}` : ''}</a>
        </div>
    );
}

export default BreadQuest;