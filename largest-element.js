function largrstElement(numbers) {
    // let largest = 0;
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }

    }
    return largest;
}

const ages = [12, 54, 35, 36, 54, 12];
const oldest = largrstElement(ages);
const oldest2 = largrstElement([-2, -6, -17]);
console.log('oldest2', oldest2);