document.getElementById('btn').addEventListener('click',fibonacci)

function fibonacci() {
    const n = document.getElementById("sayi").value;
    const arr= [1,1];
    
    for (let i=2; i<n+1;i++){
        arr.push(arr[i-2] + arr[i-1]);
    }
    document.getElementById("res").innerHTML = arr[n];   
}





