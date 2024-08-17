export default function useLocalstorage() {
    const setStorageItem = (k: string, v: any) => {
        localStorage.setItem(k, JSON.stringify(v));
    }

    const getStorageItem = (k: string) => {
        const _item = localStorage.getItem(k);
        if (!_item) return {};
        return JSON.parse(_item);
    }

    const removeStorageItem = (k: string) => {
        localStorage.removeItem(k);
    }

    const removeAllStorageItems = () => {
        localStorage.clear();
    }

    return {
        setStorageItem,
        getStorageItem,
        removeStorageItem,
        removeAllStorageItems,
    };
}
