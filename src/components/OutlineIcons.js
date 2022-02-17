import React from 'react';

import * as Icons from '@bitcoin-design/bitcoin-icons-react/outline'

class OutlineIcons extends React.Component {
  iconStyle() {
    return {
      width: this.props.size+'px',
      height: this.props.size+'px',
      strokeWidth: this.props.strokeWidth+'px',
      color: this.props.color
    }
  }

  render() {
    return (
      <div className="OutlineIcons">
        <h2>Outline icons</h2>

        <hr />
        <h3>V 0.1.9</h3>
        <Icons.SignIcon style={this.iconStyle()} />
        <Icons.VerifyIcon style={this.iconStyle()} />
        <Icons.SatoshiV3Icon style={this.iconStyle()} />
        <Icons.SatoshiV2Icon style={this.iconStyle()} />
        <Icons.FileIcon style={this.iconStyle()} />

        <hr />
        <h3>V 0.1.8</h3>

        <Icons.AddressBookIcon style={this.iconStyle()} />
        <Icons.BellIcon style={this.iconStyle()} />
        <Icons.BrushIcon style={this.iconStyle()} />
        <Icons.CalendarIcon style={this.iconStyle()} />
        <Icons.ChannelIcon style={this.iconStyle()} />
        <Icons.ChannelsIcon style={this.iconStyle()} />
        <Icons.CodeIcon style={this.iconStyle()} />
        <Icons.CoinsIcon style={this.iconStyle()} />
        <Icons.Confirmations0Icon style={this.iconStyle()} />
        <Icons.Confirmations1Icon style={this.iconStyle()} />
        <Icons.Confirmations2Icon style={this.iconStyle()} />
        <Icons.Confirmations3Icon style={this.iconStyle()} />
        <Icons.Confirmations4Icon style={this.iconStyle()} />
        <Icons.Confirmations5Icon style={this.iconStyle()} />
        <Icons.Confirmations6Icon style={this.iconStyle()} />
        <Icons.CreditCardIcon style={this.iconStyle()} />
        <Icons.GlobeIcon style={this.iconStyle()} />
        <Icons.GraphIcon style={this.iconStyle()} />
        <Icons.InvoiceIcon style={this.iconStyle()} />
        <Icons.MoonIcon style={this.iconStyle()} />
        <Icons.PantheonIcon style={this.iconStyle()} />
        <Icons.PhotoIcon style={this.iconStyle()} />
        <Icons.PieChartIcon style={this.iconStyle()} />
        <Icons.PointOfSaleIcon style={this.iconStyle()} />
        <Icons.RefreshIcon style={this.iconStyle()} />
        <Icons.RelayIcon style={this.iconStyle()} />
        <Icons.RocketIcon style={this.iconStyle()} />
        <Icons.ShieldIcon style={this.iconStyle()} />
        <Icons.SunIcon style={this.iconStyle()} />
        <Icons.TagIcon style={this.iconStyle()} />
        <Icons.TransactionsIcon style={this.iconStyle()} />

        <hr />
        <h3>V 0.1.7</h3>

        <Icons.ArrowDownIcon style={this.iconStyle()} />
        <Icons.ArrowLeftIcon style={this.iconStyle()} />
        <Icons.ArrowRightIcon style={this.iconStyle()} />
        <Icons.ArrowUpIcon style={this.iconStyle()} />
        <Icons.CaretDownIcon style={this.iconStyle()} />
        <Icons.CaretLeftIcon style={this.iconStyle()} />
        <Icons.CaretRightIcon style={this.iconStyle()} />
        <Icons.CaretUpIcon style={this.iconStyle()} />
        <Icons.CheckIcon style={this.iconStyle()} />
        <Icons.ConsoleIcon style={this.iconStyle()} />
        <Icons.CrossIcon style={this.iconStyle()} />
        <Icons.ExitIcon style={this.iconStyle()} />
        <Icons.FlipHorizontalIcon style={this.iconStyle()} />
        <Icons.FlipVerticalIcon style={this.iconStyle()} />
        <Icons.MenuIcon style={this.iconStyle()} />
        <Icons.MinusIcon style={this.iconStyle()} />
        <Icons.MixedIcon style={this.iconStyle()} />
        <Icons.PlusIcon style={this.iconStyle()} />
        <Icons.ProxyIcon style={this.iconStyle()} />
        <Icons.SendIcon style={this.iconStyle()} />
        <Icons.ReceiveIcon style={this.iconStyle()} />
        <Icons.SearchIcon style={this.iconStyle()} />
        <Icons.TransferIcon style={this.iconStyle()} />
        <Icons.UnmixedIcon style={this.iconStyle()} />
        <Icons.ExportIcon style={this.iconStyle()} />
        <Icons.BitcoinIcon style={this.iconStyle()} />
        <Icons.BitcoinCircleIcon style={this.iconStyle()} />
        <Icons.BlockIcon style={this.iconStyle()} />
        <Icons.CarIcon style={this.iconStyle()} />
        <Icons.CartIcon style={this.iconStyle()} />
        <Icons.ClearCharacterIcon style={this.iconStyle()} />
        <Icons.ClockIcon style={this.iconStyle()} />
        <Icons.CloudIcon style={this.iconStyle()} />
        <Icons.ContactsIcon style={this.iconStyle()} />
        <Icons.CopyIcon style={this.iconStyle()} />
        <Icons.DevicesIcon style={this.iconStyle()} />
        <Icons.EditIcon style={this.iconStyle()} />
        <Icons.EllipsisIcon style={this.iconStyle()} />
        <Icons.ExchangeIcon style={this.iconStyle()} />
        <Icons.FileIcon style={this.iconStyle()} />
        <Icons.GearIcon style={this.iconStyle()} />
        <Icons.GridIcon style={this.iconStyle()} />
        <Icons.HiddenIcon style={this.iconStyle()} />
        <Icons.HomeIcon style={this.iconStyle()} />
        <Icons.AlertIcon style={this.iconStyle()} />
        <Icons.InfoIcon style={this.iconStyle()} />
        <Icons.QuestionIcon style={this.iconStyle()} />
        <Icons.KeyIcon style={this.iconStyle()} />
        <Icons.LightningIcon style={this.iconStyle()} />
        <Icons.LinkIcon style={this.iconStyle()} />
        <Icons.LockIcon style={this.iconStyle()} />
        <Icons.UnlockIcon style={this.iconStyle()} />
        <Icons.MagicWandIcon style={this.iconStyle()} />
        <Icons.MilkIcon style={this.iconStyle()} />
        <Icons.MinerIcon style={this.iconStyle()} />
        <Icons.MiningIcon style={this.iconStyle()} />
        <Icons.MnemonicIcon style={this.iconStyle()} />
        <Icons.NodeIcon style={this.iconStyle()} />
        <Icons.Node0ConnectionsIcon style={this.iconStyle()} />
        <Icons.Node1ConnectionIcon style={this.iconStyle()} />
        <Icons.Node2ConnectionsIcon style={this.iconStyle()} />
        <Icons.Node3ConnectionsIcon style={this.iconStyle()} />
        <Icons.NodeHardwareIcon style={this.iconStyle()} />
        <Icons.NoDollarsIcon style={this.iconStyle()} />
        <Icons.PasswordIcon style={this.iconStyle()} />
        <Icons.QrCodeIcon style={this.iconStyle()} />
        <Icons.SafeIcon style={this.iconStyle()} />
        <Icons.SatoshiV1Icon style={this.iconStyle()} />
        <Icons.SatoshiV2Icon style={this.iconStyle()} />
        <Icons.ScanIcon style={this.iconStyle()} />
        <Icons.SdCardIcon style={this.iconStyle()} />
        <Icons.SharedWalletIcon style={this.iconStyle()} />
        <Icons.ShareIcon style={this.iconStyle()} />
        <Icons.SnowflakeIcon style={this.iconStyle()} />
        <Icons.SofaIcon style={this.iconStyle()} />
        <Icons.TrashIcon style={this.iconStyle()} />
        <Icons.TwoKeysIcon style={this.iconStyle()} />
        <Icons.UsbIcon style={this.iconStyle()} />
        <Icons.VisibleIcon style={this.iconStyle()} />
        <Icons.WalletIcon style={this.iconStyle()} />
      </div>
    );
  }
}

export default OutlineIcons;