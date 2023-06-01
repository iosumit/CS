import { HeapAsync } from 'heap-js';

const comparator = (a, b) => Promise.resolve(a.freq - b.freq);

async function huffmanCodingProblem(contentList) {
    const minHeap = new HeapAsync(comparator);
    await minHeap.init(contentList); // O(n)

    for (let i = 0; i < contentList.length - 1; i++) { // n
        let z = {};
        let x = z.left = await minHeap.pop(); // log(n)
        let y = z.right = await minHeap.pop(); // log(n)
        z.freq = x.freq + y.freq;
        z.left.bit = 0;
        z.right.bit = 1;
        await minHeap.push(z); // (log n)
    }
    // T(n) = O(nlogn)
    return minHeap;
}
const data = [{ content: 'b', freq: 30 },
{ content: 'a', freq: 40 },
{ content: 'c', freq: 20 },
{ content: 'd', freq: 5 },
{ content: 'e', freq: 3 },
{ content: 'f', freq: 2 }
];
let a = await huffmanCodingProblem(data);

