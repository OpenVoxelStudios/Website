export default function formatNumber(num: number, maximumFractionDigits: number = 1) {
    return Intl.NumberFormat('en-US', {
        notation: "compact",
        maximumFractionDigits
    }).format(num);
};