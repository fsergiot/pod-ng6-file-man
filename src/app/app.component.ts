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
  appLanguage = 'es';

  constructor() {
    const treeConfig: ConfigInterface = {
      baseURL: 'http://localhost:8080/',
      api: {
        listFile: 'api/files/list',
        uploadFile: 'api/files/upload',
        downloadFile: 'api/files/download',
        deleteFile: 'api/files/remove',
        createFolder: 'api/files/directory',
        renameFile: 'api/files/rename',
        searchFiles: 'api/files/search'
      },
      options: {
        allowFolderDownload: false,
        showFilesInsideTree: false
      }
    };

    this.tree = new TreeModel(treeConfig);
    this.node = this.tree.nodes;
  }

  // noinspection JSUnusedLocalSymbols
  itemClicked(event: any) {
    // console.log(event);
  }
}
