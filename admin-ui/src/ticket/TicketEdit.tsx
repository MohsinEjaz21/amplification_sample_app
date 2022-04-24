import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const TicketEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="price" source="price" />
      </SimpleForm>
    </Edit>
  );
};
