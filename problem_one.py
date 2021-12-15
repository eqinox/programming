from collections import deque

orders = deque(int(x) for x in input().split(', ') if 11 > int(x) >= 0)
employees = deque(int(x) for x in input().split(', ') if int(x) >= 0)
pizzas_made = 0
while orders and employees:
    if orders[0] <= employees[-1]:
        pizzas_made += orders.popleft()
        employees.pop()
    else:
        current = employees.pop()
        pizzas_made += current
        orders[0] -= current

orders = list(orders)
employees = list(employees)
if len(orders) == 0:
    print('All orders are successfully completed!')
    print(f'Total pizzas made: {pizzas_made}')
    print(f'Employees: {", ".join(str(x) for x in employees)}')
else:
    print('Not all orders are completed.')
    print(f'Orders left: {", ".join(str(x) for x in orders)}')
