export class ConfigModel {
  public title?: string;
  public version?: string;
  public menus?: MenusModel;
}

export class MenusModel {
  public header?: HeaderMenuModel;
  public footer?: FooterMenuModel;
}

export class HeaderMenuModel {
  public name?: string;
  public route?: string;
}

export class FooterMenuModel {
  public name?: string;
  public link?: string;
}
