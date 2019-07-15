import { Component } from '@angular/core';
import {ConfigInterface, NodeInterface, TreeModel} from 'ng6-file-man';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tree: TreeModel;
  node: NodeInterface;
  appLanguage = 'en';

  constructor() {
    const treeConfig: ConfigInterface = {
      baseURL: 'http://localhost:8080/',
      api: {
        listFile: 'api/list',
        uploadFile: 'api/upload',
        downloadFile: 'api/download',
        deleteFile: 'api/remove',
        createFolder: 'api/directory',
        renameFile: 'api/rename',
        searchFiles: 'api/search'
      },
      options: {
        allowFolderDownload: true,
        showFilesInsideTree: true
      }
    };

    this.tree = new TreeModel(treeConfig);
    this.node = this.tree.nodes;
  }

  // noinspection JSUnusedLocalSymbols
  itemClicked(event: any) {
    console.log(event);
  }
}
