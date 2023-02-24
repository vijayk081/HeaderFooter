import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';


import {
  BaseApplicationCustomizer, PlaceholderContent,
  PlaceholderName,
} from '@microsoft/sp-application-base';


import * as strings from 'HeaderfooterApplicationCustomizerStrings';

const LOG_SOURCE: string = 'HeaderfooterApplicationCustomizer';



export interface IHeaderfooterApplicationCustomizerProperties {

}

export default class HeaderfooterApplicationCustomizer
  extends BaseApplicationCustomizer<IHeaderfooterApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);


    let topPlaceholder: PlaceholderContent = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top);
    if (topPlaceholder) {
      topPlaceholder.domElement.innerHTML = '<div style="background-color: #ffffff;height: 60px;"><div style="display: flex;"><img src="https://desireinfoweb.com/images/logo.png" alt="" width="260" height="58" style="margin-left: 80px;><div style="font-optical-sizing: auto; color: white;"><div><h1 style="margin-left: 44px; margin-block-start: 12px;">Modual-3</h1> </div></div></div></div>';

      let bottomPlaceholder: PlaceholderContent = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Bottom);
      if (bottomPlaceholder) {
        bottomPlaceholder.domElement.innerHTML = '<div style="background-color:#c8c8c8;height: 40px;"><div style="text-align:center;color: black;font-size: 15px;font-weight: 500;" > Email: desireinfoweb@gmail.com <br> No: 9898989898</div> </div>';
        return Promise.resolve();
      }
    }
  }
}