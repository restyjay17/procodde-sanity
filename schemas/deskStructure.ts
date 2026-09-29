export default (S: any) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.document()
            .schemaType('settings')
            .documentId('globalSettings')
        ),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (item: { getId: () => string }) =>
          item.getId() !== 'settings'
      )
    ]);