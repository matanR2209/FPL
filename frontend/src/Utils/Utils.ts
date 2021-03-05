
export default class Utils {
    public static getTrendingValue(originalValue: number, currentValue: number) {
        const change = currentValue - originalValue;
        return parseFloat(((change / originalValue) * 100).toFixed(2));
        }
    }