class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        const address = this._hash(key);
        
        // Initialize the bucket if it doesn't exist
        if (!this.data[address]) {
            this.data[address] = [];
        }

        // Update or add the key-value pair
        const existingIndex = this.data[address].findIndex(entry => entry[0] === key);
        if (existingIndex !== -1) {
            this.data[address][existingIndex][1] = value; // Update existing key's value
        } else {
            this.data[address].push([key, value]); // Add new key-value pair
        }
    }

    get(key) {
        const address = this._hash(key);
        const currentBucket = this.data[address];
        
        if (!currentBucket) {
            return "It doesn't exist";
        }

        // Find the entry for the key
        const entry = currentBucket.find(item => item[0] === key);
        return entry ? entry[1] : "It doesn't exist"; // Return value or a message if not found 
    }


    keys()
    {
        const keysArray = [];
        for(let i=0;i < this.data.length;i++)
        {
            if(this.data[i])
            {
                keysArray.push(this.data[i][0][0])
            }
        }
        console.log(keysArray); 
        return keysArray;

    }
}

const MyhashTable = new HashTable(50);
MyhashTable.set('grapes', 1000);
MyhashTable.set('mango', 1300);
MyhashTable.set('grapess', 2000);
MyhashTable.set('orange', 6000);
console.log(MyhashTable.get('grapes')); // Should return 1000
console.log(MyhashTable.get('apples')); // Should return "It doesn't exist"
MyhashTable.keys();