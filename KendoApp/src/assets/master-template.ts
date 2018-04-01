export const masterData = [ {
  text: 'All',
  items: [
{
      text: 'Roles', checked: false,
      items: [
        { text: 'Admin_Role', checked: false},
        { text: 'Planner_Role', checked: false},
        { text: 'Guest_Role', checked: false},
        { text: 'SCPT_Role', checked: false},
        { text: 'DECS_Role', checked: false},
      ]
    },
    {
      text: 'CWLV', checked: false,
      items: [
        { text: 'Tabs', checked: false,
          items: [
            {text: 'CWLV-Tab', checked: false,
              items: [
                  { text: 'Filter-Panel', checked: false,
                    items: [
                      { text: 'Station dropdown', checked: false},
                      { text: 'Aircraft', checked: false},
                      { text: 'Fleet', checked: false},
                      { text:  'Ron-Rod dropdown', checked: false},
                      { text: 'MntncId', checked: false},
                      { text: 'MntncType', checked: false},
                      { text: 'Check only', checked: false},
                      { text: 'Search Button', checked: false},
                    ]
                  },
                  { text: 'CWLV-Grid',
                    items: [
                      {text: 'Export Button'},
                      {text: 'Print Button'},
                    ]
                  }
              ]
            },
            { text: 'ManHour-Tab',
              items: [
                { text: 'Refresh Button'},
                { text: 'Manhour Grid'}
              ]},
            {text: 'XUtil-Tab', expanded: true,
              items: [
                { text: 'XUtil Grid'},
                { text: 'XUtil Grid Add'},
                { text: 'XUtil Grid Edit'},
                { text: 'XUtil Grid Delete'},
              ]}
          ]
        }
      ]
    },
    {
      text: 'CWLV Base',
      items: [
        { text: 'Tab1'},
        { text: 'Tab2'}
      ]
    }
  ]
}
];
