import { Text } from "../../components/atomic/Text";
import { TableWrapper, Header, Table as Content, Actions } from "./styles";

import EditIcon from "../../assets/images/icons/edit.svg";
import DumpIcon from "../../assets/images/icons/dump.svg";
import Button from "../atomic/Button/Button";

export interface TableColumn<T> {
  title: string;
  width?: number;
  render: (data: T) => React.ReactNode;
}

interface TableProps<T> {
  title: string;
  data: T[];
  columns: TableColumn<T>[];
  headerButton?: {
    label: string;
    onClick(): void;
  };
  handleClickEdit(entity: T): void;
  handleClickDelete(entity: T): void;
}

export function Table<T>({
  title,
  data,
  columns,
  headerButton,
  handleClickEdit,
  handleClickDelete,
}: TableProps<T>) {
  return (
    <TableWrapper>
      <Header>
        <div className="details">
          <Text size="LG">{title}</Text>

          <Text weight="600" as="span">
            {data.length}
          </Text>
        </div>

        {headerButton && (
          <Button
            variant="ghost"
            size="LG"
            type="button"
            onClick={headerButton.onClick}
            title={headerButton.label}
          />
        )}
      </Header>

      <Content>
        <thead>
          <tr>
            {columns.map(({ title, width }) => (
              <th key={title} style={{ width: width || 100 }}>
                <Text weight="600" size="SM">
                  {title}
                </Text>
              </th>
            ))}

            <th style={{ width: 96 }} align="right">
              <Text weight="600" size="SM" align="right">
                Ações
              </Text>
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column, index) => (
                <td key={index}>
                  <Text weight="400" size="SM">
                    {column.render(row)}
                  </Text>
                </td>
              ))}

              <td>
                <Actions>
                  <button onClick={() => handleClickEdit(data[index])}>
                    <img src={EditIcon} alt="Editar" title="Editar" />
                  </button>
                  <button onClick={() => handleClickDelete(data[index])}>
                    <img src={DumpIcon} alt="Remover" title="Remover" />
                  </button>
                </Actions>
              </td>
            </tr>
          ))}
        </tbody>
      </Content>
    </TableWrapper>
  );
}
