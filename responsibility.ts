interface Responsibility {
  check: boolean;
  Category: string;
  Last_Name: string;
  First_Name: string;
  Email: string;
  Phone: string;
  Organization: string;
  Remarks: string;
  Type: string;
}

function filterTableByCategory(): void {
  const tableRows = document.querySelectorAll('.MuiTableBody-root css-apqrd9-MuiTableBody-root');

  tableRows.forEach(row => {
    const categoryCell = row.querySelector('td:nth-child(2)');
    if (categoryCell && categoryCell.textContent.trim() === '') {
      row.style.display = 'none';
    } else {
      row.style.display = '';
    }
  });
}

function login(username: string, password: string): boolean {
  return username === "john@mail.com" && password === "pass123";
}

function main() {
  const username = "john@mail.com";
  const password = "pass123";

  // Simulate login process
  if (login(username, password)) {
    console.log("Login successful.");

    console.log(filterTableByCategory);
  } else {
    console.error("Login failed. Please check your credentials.");
  }
}

filterTableByCategory();
