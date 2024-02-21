//window.localStorage.clear()

const overlay = document.getElementById('overlay')
const journal = document.getElementById('journal')
const jounral_textarea = document.getElementById('journal_textarea')
const key_arr = ['1_1_', '1_2_', '1_3_', '1_4_', '1_5_', '2_1_', '2_2_', '2_3_', '2_4_', '2_5_', '3_1_', '3_2_', '3_3_', '3_4_', '3_5_', '4_1_', '4_2_', '4_3_', '4_4_', '4_5_', '5_1_', '5_2_', '5_3_', '5_4_', '5_5_', '6_1_', '6_2_', '6_3_', '6_4_', '6_5_', '7_1_', '7_2_', '7_3_', '7_4_', '7_5_', '8_1_', '8_2_', '8_3_', '8_4_', '8_5_', '9_1_', '9_2_', '9_3_', '9_4_', '9_5_', '10_1_', '10_2_', '10_3_', '10_4_', '10_5_', '11_1_', '11_2_', '11_3_', '11_4_', '11_5_', '12_1_', '12_2_', '12_3_', '12_4_', '12_5_', '13_1_', '13_2_', '13_3_', '13_4_', '13_5_', '14_1_', '14_2_', '14_3_', '14_4_', '14_5_', '15_1_', '15_2_', '15_3_', '15_4_', '15_5_', '16_1_', '16_2_', '16_3_', '16_4_', '16_5_', '17_1_', '17_2_', '17_3_', '17_4_', '17_5_', '18_1_', '18_2_', '18_3_', '18_4_', '18_5_', '19_1_', '19_2_', '19_3_', '19_4_', '19_5_', '20_1_', '20_2_', '20_3_', '20_4_', '20_5_', '21_1_', '21_2_', '21_3_', '21_4_', '21_5_', '22_1_', '22_2_', '22_3_', '22_4_', '22_5_', '23_1_', '23_2_', '23_3_', '23_4_', '23_5_', '24_1_', '24_2_', '24_3_', '24_4_', '24_5_', '25_1_', '25_2_', '25_3_', '25_4_', '25_5_', '26_1_', '26_2_', '26_3_', '26_4_', '26_5_', '27_1_', '27_2_', '27_3_', '27_4_', '27_5_', '28_1_', '28_2_', '28_3_', '28_4_', '28_5_', '29_1_', '29_2_', '29_3_', '29_4_', '29_5_', '30_1_', '30_2_', '30_3_', '30_4_', '30_5_', '31_1_', '31_2_', '31_3_', '31_4_', '31_5_'];
let journal_id = '';
let butt_num = 0;


for (let a = 0; a <key_arr.length; a++){
    document.getElementById(key_arr[a]).value = localStorage.getItem(key_arr[a])
    if (document.getElementById(key_arr[a]).value = localStorage.getItem(key_arr[a])){
        document.getElementById(key_arr[a]).classList.add('border_bottom')
    }
}

//Expand Functionality
document.addEventListener('click', (e)=>{
    if (e.target.id =='expand_button'){
        overlay.classList.add('active');
        journal.classList.add('active');
        butt_num = e.target.innerText;
        butt_num = butt_num.toString();
        if (localStorage.getItem('journal'+butt_num) != null){
            jounral_textarea.value = localStorage.getItem('journal'+butt_num)
        }
        else{
            jounral_textarea.value = '';
        }
        for (let i = 1; i < 6; i++){
            let ele = butt_num  + '_' + i + '_';
            if (localStorage.getItem(ele) != null){
                document.getElementById('button'+i).innerText = '-' + localStorage.getItem(ele)
            }
        }
    }

    if (e.target.id == 'overlay'){
        overlay.classList.remove('active')
        journal.classList.remove('active')
        for (let i = 1; i < 6; i++){
            document.getElementById('button'+i).innerText = '';
        }
    }
})


//LocalStorage Inputs
document.addEventListener('input', (e)=>{
    if (e.target.tagName == 'INPUT'){
        let task_input = document.getElementById(e.target.id)
        task_input.addEventListener('input', () =>{
            task_input.classList.add('border_bottom');
            localStorage.setItem(e.target.id, e.target.value)
        })

    }
})
jounral_textarea.addEventListener('input', (e)=>{
    localStorage.setItem('journal'+butt_num, jounral_textarea.value)
})

//Task check & uncheck functionality
document.getElementById('tasks_cont').addEventListener('click', (e)=>{
    if (e.target.classList.contains('task_button')){     
        e.target.classList.toggle('task_done');
    }
    let ele = butt_num  + '_' + e.target.id.substring(6) + '_';
})