import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeNode, TreeModel, TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';

const actionMapping: IActionMapping = {
  mouse: {
    contextMenu: (tree, node, $event) => {
      $event.preventDefault();
      // node.data.checked = true;
      console.log(`context menu for ${node.data.name}`);
      console.log(`context menu for ${node.data.checked}`);
      console.log(tree);
    },
    dblClick: (tree, node, $event) => {
      if (node.hasChildren) {
        TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
      }
    },
    click: (tree, node, $event) => {
      $event.shiftKey
        ? TREE_ACTIONS.TOGGLE_ACTIVE_MULTI(tree, node, $event)
        : TREE_ACTIONS.TOGGLE_ACTIVE(tree, node, $event);
    }
  },
  keys: {
    [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
  }
};

@Component({
  selector: 'app-role-access-tree',
  templateUrl: './role-access-tree.component.html',
  styleUrls: ['./role-access-tree.component.css']
})
export class RoleAccessTreeComponent {
  constructor() {}

  /* nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ]; */

  /* options: ITreeOptions = {
    displayField: 'nodeName',
    isExpandedField: 'expanded',
    idField: 'uuid',
    hasChildrenField: 'nodes',
    actionMapping: {
      mouse: {
        dblClick: (tree, node, $event) => {
          // tslint:disable-next-line:curly
          if (node.hasChildren)
            TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
        }
      },
      keys: {
        [KEYS.ENTER]: (tree, node, $event) => {
          node.expandAll();
        }
      }
    },
    nodeHeight: 23,
    allowDrag: (node) => {
      return true;
    },
    allowDrop: (node) => {
      return true;
    },
    useVirtualScroll: true,
    animateExpand: true,
    scrollOnActivate: true,
    animateSpeed: 30,
    animateAcceleration: 1.2
  }; */

 /*  nodes1 = [
    {
      title: 'root1',
      className: 'root1Class'
    },
    {
      title: 'root2',
      className: 'root2Class',
      hasChildren: true
    }
  ];

  nodes2 = [
    {
      title: 'root1',
      className: 'root1Class'
    },
    {
      title: 'root2',
      className: 'root2Class',
      children: [
        { title: 'child1', className: 'child1Class' }
      ]
    }
  ];

  options1: ITreeOptions = {
    getChildren: () => new Promise((resolve, reject) => { })
  };

  options0: ITreeOptions = {
    displayField: 'title',
    nodeClass: (node) => `${node.data.title}Class`
  }; */

  nodes = [
    {
      name: 'All',
      children: [
        {
          name: 'Roles',
          children: [
            { name: 'Admin_Role', checked: true},
            { name: 'Planner_Role'},
            { name: 'Guest_Role'},
            { name: 'SCPT_Role'},
            { name: 'DECS_Role'},
          ]
        },
        {
          name: 'CWLV',
          children: [
            { name: 'Tabs',
              children: [
                {name: 'CWLV-Tab',
                  children: [
                      { name: 'Filter-Panel',
                        children: [
                          { name: 'Station dropdown'},
                          { name: 'Aircraft'},
                          { name: 'Fleet'},
                          { name: 'Ron-Rod dropdown'},
                          { name: 'MntncId'},
                          { name: 'MntncType'},
                          { name: 'Check only'},
                          { name: 'Search Button'},
                        ]
                      },
                      { name: 'CWLV-Grid',
                        children: [
                          {name: 'Export Button'},
                          {name: 'Print Button'},
                        ]
                      }
                  ]
                },
                { name: 'ManHour-Tab',
                  children: [
                    { name: 'Refresh Button'},
                    { name: 'Manhour Grid'}
                  ]},
                {name: 'XUtil-Tab',
                  children: [
                    { name: 'XUtil Grid'},
                    { name: 'XUtil Grid Add'},
                    { name: 'XUtil Grid Edit'},
                    { name: 'XUtil Grid Delete'},
                  ]}
              ]
            }
          ]
        },
        {
          name: 'CWLV Base',
          children: [
            { name: 'Tab1'},
            { name: 'Tab2'}
          ]
        }
      ]
    }
  ];

  options: ITreeOptions = {
    useCheckbox: true,
    actionMapping
  };

  optionsDisabled: ITreeOptions = {
    useCheckbox: true,
    useTriState: false
  };


  @ViewChild('tree') tree;

  ngAfterViewInit() {
    this.tree.treeModel.expandAll();
  }

}
