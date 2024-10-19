function calcolaCodiceBinario() {
    const input = document.getElementById('input').value;
    let binary = '';
    for (let i = 0; i < input.length; i++) {
        binary += input[i].charCodeAt(0).toString(2) + ' ';
    }
    document.getElementById('result').innerHTML = binary;
}
