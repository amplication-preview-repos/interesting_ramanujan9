import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { BetTitle } from "../bet/BetTitle";

export const MatchCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="bets"
          reference="Bet"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BetTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="date" source="date" />
        <SelectInput
          source="result"
          label="result"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="team1" source="team1" />
        <TextInput label="team2" source="team2" />
      </SimpleForm>
    </Create>
  );
};
