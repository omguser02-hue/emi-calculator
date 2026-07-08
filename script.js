function calculateEMI() {
  const amount = parseFloat(document.getElementById('amount').value);
  const rate = parseFloat(document.getElementById('rate').value) / 1200; // monthly rate
  const months = parseFloat(document.getElementById('months').value);

  if (!amount || !rate || !months) {
    alert("Sab fields bharein!");
    return;
  }

  const emi = (amount * rate * Math.pow(1 + rate, months)) / 
              (Math.pow(1 + rate, months) - 1);
  
  const totalPay = emi * months;
  const totalInterest = totalPay - amount;

  const resultDiv = document.getElementById('result');
  resultDiv.style.display = 'block';
  resultDiv.innerHTML = `
    <strong>Monthly EMI: ₹${emi.toFixed(2)}</strong><br>
    Total Amount Payable: ₹${totalPay.toFixed(2)}<br>
    Total Interest: ₹${totalInterest.toFixed(2)}
  `;
}