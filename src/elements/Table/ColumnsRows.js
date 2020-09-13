import { useMemo } from 'react'

export const columns = [
  {
    Header: 'First Name',
    accessor: 'firstName',
    Footer: (info) => {
      console.log(info)
      return `Count: ${info.data.length}`
    }
    // filter: (rows, id, filterType) => rows.filter((row) => row.values[id].startsWith(filterType))
  },
  {
    Header: 'Last Name',
    accessor: 'lastName'
    // filter: (rows, id, filterType) => rows.filter((row) => row.values[id].startsWith(filterType))
  },
  {
    Header: 'Age',
    accessor: 'age'
    // filter: (rows, id, filterType) => rows.filter((row) => row.values[id].startsWith(filterType))
  },
  {
    Header: 'Gender',
    accessor: 'gender'
    // filter: (rows, id, filterType) => rows.filter((row) => row.values[id].startsWith(filterType))
  },
  {
    Header: 'Grade',
    accessor: 'grade'
    // filter: (rows, id, filterType) => rows.filter((row) => row.values[id].startsWith(filterType))
  }
]
export const data = [
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 9,
    gender: 'F',
    grade: 4,
    uid: 100
  },
  {
    firstName: 'Mike',
    lastName: 'Ford',
    age: 5,
    gender: 'M',
    grade: 1,
    uid: 200
  },
  {
    firstName: 'John',
    lastName: 'Smith',
    age: 8,
    gender: 'M',
    grade: 4,
    uid: 300
  },
  {
    firstName: 'Joe',
    lastName: 'Johnson',
    age: 11,
    gender: 'M',
    grade: 6,
    uid: 400
  },
  {
    firstName: 'Linda',
    lastName: 'Ford',
    age: 8,
    gender: 'F',
    grade: 5,
    uid: 500
  },
  {
    firstName: 'Noah',
    lastName: 'Wilson',
    age: 9,
    gender: 'M',
    grade: 3,
    uid: 600
  },
  {
    firstName: 'Emma',
    lastName: 'Lee',
    age: 7,
    gender: 'F',
    grade: 3,
    uid: 700
  },
  {
    firstName: 'James',
    lastName: 'Jones',
    age: 10,
    gender: 'M',
    grade: 5,
    uid: 800
  },
  {
    firstName: 'Mia',
    lastName: 'Brown',
    age: 8,
    gender: 'F',
    grade: 5,
    uid: 900
  },
  {
    firstName: 'William',
    lastName: 'Davis',
    age: 11,
    gender: 'M',
    grade: 6,
    uid: 1000
  }
]
