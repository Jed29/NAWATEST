// 1 Short Character

const shortChar = (words) =>{
    const word = words.toLowerCase().replace(/\s/g,"")

    let vokal = []
    let konsonan = []

    for(let i = 0 ; i< word.length; i++){
        "aiueo".includes(word[i]) ? vokal.push(word[i]) : konsonan.push(word[i])
    }
    return `Karakter Vokal adalah :${vokal.join("")}
    Karakter Consonant Adalah : ${konsonan.join("")}`
}

console.log(shortChar("NAWA TEST"))

// 2.PSBB
let jumlahKeluarga = 8
let anggotaSetiapKeluarga = [2,3,4,4,2,1,3,1]

const jumlahBus = (jumlahKeluarga, anggotaSetiapKeluarga)=>{
    if(jumlahKeluarga != anggotaSetiapKeluarga.length){
        return "Input must be equal with count of family"
    }
    const jumlahAnggota = anggotaSetiapKeluarga.reduce((acc, cur) => acc + cur);
    // console.log(jumlahAnggota)
    return `Minimum bus required is ${Math.ceil(jumlahAnggota/4)}`

}
// console.log(jumlahBus(jumlahKeluarga,anggotaSetiapKeluarga) c)

console.log(jumlahBus(jumlahKeluarga,anggotaSetiapKeluarga))