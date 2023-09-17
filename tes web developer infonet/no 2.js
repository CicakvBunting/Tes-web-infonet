function copyAmount(benefit, kriteria) {
    // Membuat objek untuk memetakan nama ke amount
    let nameToAmount = {};
    benefit.forEach(item => {
        nameToAmount[item.name] = item.amount;
    });

    // Menyalin amount berdasarkan kriteria
    kriteria.forEach(krit => {
        for (let source in krit) {
            krit[source].forEach(target => {
                let sourceAmount = nameToAmount[source];
                if (sourceAmount !== undefined) {
                    let targetItem = benefit.find(item => item.name === target);
                    if (targetItem) {
                        targetItem.amount = sourceAmount;
                    }
                }
            });
        }
    });

    return benefit;
}

const benefit = [
    {id: 1, name: "Gaji Pokok", amount: 3000000, unit: 12},
    {id: 2, name: "Tunjangan Hari Raya (THR)", amount: 0, unit: 1},
    {id: 3, name: "Uang makan", amount: 100000, unit: 12},
    {id: 4, name: "Tunjangan shift", amount: 0, unit: 0.2},
];

const kriteria = [{'Gaji Pokok':['Tunjangan Hari Raya (THR)','Tunjangan shift']}];

console.log(copyAmount(benefit, kriteria));
