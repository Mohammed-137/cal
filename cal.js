function calculateSymbol(operator) {
  var n1 = parseFloat(document.getElementById("num1").value);
  var n2 = parseFloat(document.getElementById("num2").value);
  var result = "";

  switch(operator) {
    case '+':
      result = n1 + n2;
      break;
    case '-':
      result = n1 - n2;
      break;
    case '*':
      result = n1 * n2;
      break;
    case '/':
      result = n2 !== 0 ? (n1 / n2).toFixed(4) : "❌ Cannot divide by zero";
      break;
    case '√':
      result = Math.sqrt(n1).toFixed(4);
      break;
    case '%':
      result = ((n1 / 100) * n2).toFixed(4);
      break;
    case 'π':
      result = Math.PI.toFixed(8);
      break;
    case '^2':
      result = n1 * n1;
      break;
    case '≈':
      result = Math.abs(n1 - n2) < 0.01 ? "Approximately Equal (≈)" : "Not Approx Equal";
      break;
    case '≠':
      result = n1 !== n2 ? "Not Equal (≠)" : "Equal";
      break;
    case '<':
      result = n1 < n2 ? "True" : "False";
      break;
    case '>':
      result = n1 > n2 ? "True" : "False";
      break;
    case '≤':
      result = n1 <= n2 ? "True" : "False";
      break;
    case '≥':
      result = n1 >= n2 ? "True" : "False";
      break;
    default:
      result = "Unsupported Operation";
  }

  document.getElementById("result").textContent = "Result: " + result;
}